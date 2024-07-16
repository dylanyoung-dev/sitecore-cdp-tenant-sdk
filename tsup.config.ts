import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/client.ts'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  minify: true,
  target: 'esnext',
  outDir: 'dist',
});
