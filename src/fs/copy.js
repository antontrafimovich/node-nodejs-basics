import { cp } from "fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const src = path.resolve(__dirname, "files");
  const dest = path.resolve(__dirname, "files_copy");

  try {
    await cp(src, dest, { errorOnExist: true, recursive: true, force: false });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

copy();
