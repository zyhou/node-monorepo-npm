import { add } from "@monorepo/core";
import { bar } from "@monorepo/core/foo/bar";

export const getHello = () => {
  return `bar should be ${bar()};\n1 + 2 = ${add(1, 2)}; should be 3`;
};
