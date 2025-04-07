import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import prettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: [".github/", "node_modules/", ".next/", "src/components/ui", "*.config.ts", "*.mjs"] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      prettier: prettier,
    },
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Prettier integration rules
      "prettier/prettier": "warn",
    },
  },
];

export default eslintConfig;
