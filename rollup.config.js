import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      })

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    }
  }
}

export default {
  input: 'lib/index.js',
  output: [
    { file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name }
  ],
  plugins: [
    svelte({
      // compile only *.wc.svelte files as web components
      include: /\.wc\.svelte$/,
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
        customElement: true
      }
    }),
    svelte({
      exclude: /\.wc\.svelte$/,
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production
      }
    }),
    resolve(),
    terser(),
    bundleSize(),
    !production && serve()
  ],
  watch: {
    clearScreen: true
  }
};
