import { rm } from "fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToRemove = path.resolve(__dirname, "files", "fileToRemove.txt");

  try {
    await rm(fileToRemove);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
