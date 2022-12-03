import fs from "node:fs";

import { fileURLToPath } from "node:url";
import path from "path";
import { stdin } from "node:process";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToWritePath = path.resolve(__dirname, "files", "fileToWrite.txt");

  const w = fs.createWriteStream(fileToWritePath);

  stdin.pipe(w);
};

await write();
