import typescript from "rollup-plugin-typescript2";
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss'

import pkg from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/lib/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
    }
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    typescript({
      typescript: require('typescript'),
      rollupCommonJSResolveHack: false,
    }),
    commonjs(),
    scss()
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
