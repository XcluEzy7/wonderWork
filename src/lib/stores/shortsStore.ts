import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { videoStore } from './videoStore';

export type Short = {
	id: string;
	thumbnail: string;
	title: string;
	views: string;
};

export type Shorts = {
	videoId: string;
	shorts: Short[];
	isLoading: boolean;
};

const initialData: Shorts = {
	videoId: '',
	shorts: [],
	isLoading: false
};

function createShortsStore() {
	const { subscribe, set, update } = writable<Shorts>(initialData);

	// Auto-fetch when video changes
	if (browser) {
		videoStore.subscribe((video) => {
			if (video.id) {
				fetchShorts(video.id);
			}
		});
	}

	const fetchShorts = async (videoId: string) => {
		if (!browser) return;
		update((prev) => ({ ...prev, isLoading: true }));
		try {
			const response = await fetch(`/api/mock/shorts/${videoId}`);
			const data = await response.json();
			set({ ...data, isLoading: false });
		} catch (error) {
			console.error('Failed to fetch shorts:', error);
			update((prev) => ({ ...prev, isLoading: false }));
		}
	};

	return {
		subscribe,
		fetchShorts
	};
}

export const shortsStore = createShortsStore();

