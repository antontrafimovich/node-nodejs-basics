import { cpus } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runWorker = (n) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, "worker.js"), {
      workerData: n,
    });

    worker.on("message", resolve);
    worker.on("error", reject);
  });
};

const performCalculations = async () => {
  try {
    const result = (
      await Promise.allSettled(
        new Array(cpus().length).fill(undefined).map((_, index) => {
          return runWorker(10 + index);
        })
      )
    ).map((result) => {
      if (result.status === "rejected") {
        return { status: "error", value: null };
      }

      return { status: "resolved", value: result.value };
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

await performCalculations();
