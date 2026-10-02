import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Check, FileText, Image as ImageIcon, Loader2, UploadCloud } from "lucide-react";

function toBase64(buffer: ArrayBuffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const chunk = bytes.subarray(offset, offset + chunkSize);
    for (let index = 0; index < chunk.length; index += 1) binary += String.fromCharCode(chunk[index]);
  }
  return btoa(binary);
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ProjectFiles() {
  const { user, loading, isAuthenticated } = useAuth({ redirectOnUnauthenticated: true });
  const utils = trpc.useUtils();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const filesQuery = trpc.files.list.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
    retry: false,
  });
  const upload = trpc.files.upload.useMutation({
    onSuccess: async () => {
      setSelectedFile(null);
      setMessage("File uploaded successfully");
      await utils.files.list.invalidate();
    },
    onError: error => setMessage(error.message),
  });

  if (loading || !isAuthenticated) {
    return <div className="files-loading"><Loader2 className="spin" size={22} /> Checking your workspace access…</div>;
  }

  if (user?.role !== "admin") {
    return <div className="files-loading"><p>Project workspace access is restricted to the project owner.</p><a className="files-back" href="/">Back to the website</a></div>;
  }

  const handleUpload = async () => {
    if (!selectedFile) return;
    if (selectedFile.size > 6_000_000) {
      setMessage("Please choose a file smaller than 6 MB.");
      return;
    }
    setMessage("");
    const dataBase64 = toBase64(await selectedFile.arrayBuffer());
    upload.mutate({
      fileName: selectedFile.name,
      mimeType: selectedFile.type || "application/octet-stream",
      fileSize: selectedFile.size,
      dataBase64,
    });
  };

  return (
    <main className="files-page">
      <div className="files-shell">
        <a className="files-back" href="/"><ArrowLeft size={15} /> Back to SFT Token</a>
        <div className="files-heading">
          <p className="eyebrow"><span className="eyebrow-line" />Project workspace</p>
          <h1>Store the files<br />that move it forward.</h1>
          <p>Upload whitepaper drafts, project images, legal documents and partner materials. The file bytes are stored in Manus Storage; the database keeps only secure metadata and the storage reference.</p>
        </div>

        <section className="upload-card">
          <div className="upload-copy"><UploadCloud size={28} /><div><h2>Upload a project file</h2><p>Images, PDF and documents up to 6 MB.</p></div></div>
          <div className="upload-controls">
            <label className="file-picker"><input type="file" accept="image/*,.pdf,.doc,.docx,.txt" onChange={event => setSelectedFile(event.target.files?.[0] ?? null)} /><span>{selectedFile ? selectedFile.name : "Choose a file"}</span></label>
            <button className="btn btn-primary" onClick={handleUpload} disabled={!selectedFile || upload.isPending}>{upload.isPending ? <Loader2 className="spin" size={16} /> : <UploadCloud size={16} />} {upload.isPending ? "Uploading…" : "Upload file"}</button>
          </div>
          {message && <p className={message.includes("successfully") ? "upload-message success" : "upload-message"}>{message.includes("successfully") && <Check size={15} />} {message}</p>}
        </section>

        <section className="files-list-section">
          <div className="files-list-heading"><div><p className="eyebrow"><span className="eyebrow-line" />Stored assets</p><h2>Project files</h2></div><span className="files-count">{filesQuery.data?.length ?? 0} files</span></div>
          {filesQuery.isLoading ? <div className="files-empty"><Loader2 className="spin" size={18} /> Loading files…</div> : filesQuery.data?.length ? <div className="files-grid">{filesQuery.data.map(file => <a className="file-card" href={file.storageUrl} target="_blank" rel="noreferrer" key={file.id}>{file.mimeType.startsWith("image/") ? <ImageIcon size={21} /> : <FileText size={21} />}<div><strong>{file.fileName}</strong><span>{file.mimeType} · {formatBytes(file.fileSize)}</span></div><small>{new Date(file.createdAt).toLocaleDateString()}</small></a>)}</div> : <div className="files-empty">No project files uploaded yet. Add the first asset above.</div>}
        </section>
      </div>
    </main>
  );
}
