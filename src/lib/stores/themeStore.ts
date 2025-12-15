import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createThemeStore() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggleDarkMode: () => {
			update((darkMode) => {
				const newDarkMode = !darkMode;
				if (browser) {
					const root = document.documentElement;
					if (newDarkMode) {
						root.classList.add('dark');
					} else {
						root.classList.remove('dark');
					}
				}
				return newDarkMode;
			});
		}
	};
}

export const themeStore = createThemeStore();

