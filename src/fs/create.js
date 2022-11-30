import { appendFile, open } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";

const create = async () => {
  const fileName = "fresh.txt";
  const content = "I am fresh and young";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.resolve(__dirname, "files", fileName);

  let file;

  try {
    file = await open(filePath);
  } catch {}

  if (file) {
    throw new Error("FS operation failed");
  }

  try {
    await appendFile(filePath, content);
  } catch (err) {
    console.log(err);
  }
};

await create();
