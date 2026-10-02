import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type TestUser = NonNullable<TrpcContext["user"]>;

function createContext(user: TestUser | null): TrpcContext {
  return {
    user,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

const baseUser: TestUser = {
  id: 1,
  openId: "owner-test",
  email: "owner@example.com",
  name: "Project Owner",
  loginMethod: "manus",
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

describe("project files", () => {
  it("requires authentication to list project files", async () => {
    const caller = appRouter.createCaller(createContext(null));
    await expect(caller.files.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("rejects a non-admin user from the workspace", async () => {
    const caller = appRouter.createCaller(
      createContext({ ...baseUser, role: "user" }),
    );
    await expect(caller.files.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("rejects files above the 6 MB upload limit", async () => {
    const caller = appRouter.createCaller(createContext(baseUser));
    await expect(
      caller.files.upload({
        fileName: "large.pdf",
        mimeType: "application/pdf",
        fileSize: 6_000_001,
        dataBase64: "AA==",
      }),
    ).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });
});
