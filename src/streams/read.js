import fs from "node:fs";

import { fileURLToPath } from "node:url";
import path from "path";
import { stdout } from "node:process";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToReadPath = path.resolve(__dirname, "files", "fileToRead.txt");

  const r = fs.createReadStream(fileToReadPath);

  r.pipe(stdout);
};

await read();
