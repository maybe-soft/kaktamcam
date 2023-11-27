import ts from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import progress from 'rollup-plugin-progress';
import terser from '@rollup/plugin-terser';
import run from '@rollup/plugin-run';

const isDev = process.env.ROLLUP_WATCH === 'true';
export default {
  input: 'src/index.ts',
  output: {
    sourcemap: true,
    file: 'dist/bot.mjs',
    format: 'es',
  },
  plugins: [
    progress(),
    ts(),
    json(),
    !isDev &&
      terser({
        keep_classnames: true,
      }),
    isDev && run(),
  ],
};
