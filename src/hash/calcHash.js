import crypto from "node:crypto";

import { readFile } from "fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToReadPath = path.resolve(__dirname, "files", "fileToCalculateHashFor.txt");

  try {
    const content = await readFile(fileToReadPath, { encoding: "utf-8" });
    const hashSum = crypto.createHash("sha256");
    hashSum.update(content, "utf-8");
    console.log(hashSum.digest("hex"));
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await calculateHash();
