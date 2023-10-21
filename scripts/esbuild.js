#!/usr/bin/env node

if (typeof require == 'function') {
  let esbuild = require('esbuild')
  let { nodeExternalsPlugin } = require('esbuild-node-externals')
  main(esbuild, nodeExternalsPlugin)
} else {
  Promise.all([import('esbuild'), import('esbuild-node-externals')]).then(
    ([esbuild, { nodeExternalsPlugin }]) => main(esbuild, nodeExternalsPlugin),
  )
}

function main(esbuild, nodeExternalsPlugin) {
  Promise.all([
    // esbuild.build({
    //   entryPoints: ['index.ts'],
    //   outfile: 'dist/index.js',
    //   bundle: true,
    //   minify: false,
    //   format: 'cjs',
    //   platform: 'node',
    //   sourcemap: false,
    //   sourcesContent: false,
    //   target: 'node12',
    //   plugins: [nodeExternalsPlugin()],
    // }),
    esbuild.build({
      entryPoints: ['index.ts'],
      outfile: 'dist/index.mjs',
      bundle: true,
      minify: false,
      format: 'esm',
      platform: 'node',
      sourcemap: false,
      sourcesContent: false,
      target: 'node14',
      plugins: [nodeExternalsPlugin()],
    }),
    esbuild.build({
      entryPoints: ['browser.ts'],
      outfile: 'dist/browser.js',
      bundle: true,
      minify: false,
      format: 'iife',
      platform: 'browser',
      sourcemap: false,
      sourcesContent: false,
      target: ['es2021'],
      plugins: [],
    }),
  ]).catch(error => {
    console.error(error)
    process.exit(1)
  })
}
