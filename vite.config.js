import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  server: {
    host: true, // Listen on all local IPs
    port: 5173, // Default Vite port
    strictPort: true, // Ensure consistent port
  },
>>>>>>> 5a8e4021c04e952f6a7715a58e856d09ad33700a
});