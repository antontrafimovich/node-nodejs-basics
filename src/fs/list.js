import { readdir } from "fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const dirPath = path.resolve(__dirname, "files");

  try {
    const files = await readdir(dirPath);
    console.log(files);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
