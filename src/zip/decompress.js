import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

import { fileURLToPath } from "node:url";
import path from "path";

const pipe = promisify(pipeline);

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const archivePath = path.resolve(__dirname, "files", "archive.gz");
  const decompressedFile = path.resolve(
    __dirname,
    "files",
    "fileToCompress1.txt"
  );

  const unzip = createUnzip();
  const r = createReadStream(archivePath);
  const w = createWriteStream(decompressedFile);

  try {
    await pipe(r, unzip, w);
  } catch (error) {
    console.error(error);
  }
};

await decompress();
