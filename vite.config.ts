import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    // опционально: можно явно задать jsxRuntime
    jsxRuntime: 'automatic'
  })],
  resolve: {
    // по умолчанию включено, но можно явно указать
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
});
