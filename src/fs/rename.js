import { rename as fsRename, open } from "fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const from = path.resolve(__dirname, "files", "wrongFilename.txt");
  const to = path.resolve(__dirname, "files", "properFilename.md");

  let file;

  try {
    file = await open(to);
  } catch {}

  if (file) {
    await file.close();
    throw new Error("FS operation failed");
  }

  try {
    await fsRename(from, to);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await rename();
