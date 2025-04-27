import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.cjs.js", format: "cjs" },
    { file: "dist/index.esm.js", format: "esm" },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts"],
      exclude: "node_modules/**",
    }),
  ],
  external: ["typescript"],
};
