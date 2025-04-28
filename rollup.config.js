import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main, // "main": "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module, // "module": "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts"],
      exclude: "node_modules/**",
    }),
  ],
  external: [], // 외부 의존성은 여기에 명시
};
