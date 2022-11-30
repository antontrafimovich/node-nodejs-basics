import { readFile } from "fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToReadPath = path.resolve(__dirname, "files", "fileToRead.txt");

  try {
    const content = await readFile(fileToReadPath, { encoding: "utf-8" });
    console.log(content);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();
