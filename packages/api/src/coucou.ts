import { getHelloWorld } from "@monorepo/core/src/hello";

const getCoucou = () => {
  return getHelloWorld();
};

console.log(getCoucou());
