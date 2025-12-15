import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const port = parseInt(process.env.PORT || '3000', 10);

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port,
		strictPort: false, // If port is taken, try next available port
		host: true // Listen on all addresses
	},
	preview: {
		port,
		strictPort: false,
		host: true
	}
});

