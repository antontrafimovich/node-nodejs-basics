import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const reverse = new Transform({
    decodeStrings: false,
    transform: (chunk, _, callback) => {
      callback(null, chunk.split("").reverse().join(""));
    },
  });

  stdin.setEncoding('utf-8').pipe(reverse).pipe(stdout);
};

await transform();
