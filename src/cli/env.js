import { env } from "node:process";

const parseEnv = () => {
  const rssData = Object.keys(env).reduce((result, key) => {
    if (key.includes("RSS_")) {
      return [...result, `${key}=${env[key]}`];
    }

    return result;
  }, []);

  console.log(rssData.join('; '))
};

parseEnv();
