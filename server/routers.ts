import { COOKIE_NAME } from "@shared/const";
import { listProjectFiles, insertProjectFile } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  files: router({
    list: adminProcedure.query(() => listProjectFiles()),
    upload: adminProcedure
      .input(
        z.object({
          fileName: z.string().min(1).max(255),
          mimeType: z.string().min(1).max(120),
          fileSize: z.number().int().positive().max(6_000_000),
          dataBase64: z.string().min(1).max(8_500_000),
        }),
      )
      .mutation(async ({ input, ctx }) => {
        const safeName = input.fileName.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 120) || "file";
        const data = Buffer.from(input.dataBase64, "base64");
        if (data.length !== input.fileSize) {
          throw new Error("File size validation failed");
        }
        const uploaded = await storagePut(
          `project-files/${ctx.user.id}/${Date.now()}-${safeName}`,
          data,
          input.mimeType,
        );
        return insertProjectFile({
          uploadedBy: ctx.user.id,
          fileName: input.fileName,
          mimeType: input.mimeType,
          fileSize: input.fileSize,
          storageKey: uploaded.key,
          storageUrl: uploaded.url,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
