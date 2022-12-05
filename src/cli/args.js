import { argv } from "node:process";

const parseArgs = () => {
  const args = argv.slice(2);

  const result = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg.includes("--")) {
      result.push(`${arg} is ${args[i + 1]}`);
    }

    i += 1;
  }

  console.log(result.join(", "));
};

parseArgs();
