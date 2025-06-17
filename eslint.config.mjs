// https://nextjs.org/docs/app/api-reference/config/eslint
// https://typescript-eslint.io/rules/
// https://eslint.org/docs/latest/rules/

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "@next/next/no-async-client-component": "off",
      "@next/next/no-img-element": "off",
      // "@typescript-eslint/no-unused-vars": "off",
      // "prefer-const": "warn"
    }
  })
];

export default eslintConfig;
