import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

import { fileURLToPath } from "node:url";
import path from "node:path";

const pipe = promisify(pipeline);

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileToCompressPath = path.resolve(
    __dirname,
    "files",
    "fileToCompress.txt"
  );
  const archivePath = path.resolve(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const r = createReadStream(fileToCompressPath);
  const w = createWriteStream(archivePath);
  try {
    await pipe(r.setEncoding("utf-8"), gzip, w);
  } catch (error) {
    console.error(error);
  }
};

await compress();
