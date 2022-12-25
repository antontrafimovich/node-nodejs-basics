import { fork } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  fork(path.resolve(__dirname, "files", "script.js"), args);
};

spawnChildProcess();
