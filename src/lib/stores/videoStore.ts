import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type VideoTag = {
	id: string;
	displayName: string;
};

export type Channel = {
	name: string;
	subscribers: string;
};

export type Video = {
	id: string;
	tags: VideoTag[];
	title: string;
	channel: Channel;
	isLoading: boolean;
};

const initialData: Video = {
	id: '',
	tags: [],
	title: '',
	channel: {
		name: '',
		subscribers: ''
	},
	isLoading: false
};

function createVideoStore() {
	const { subscribe, set, update } = writable<Video>(initialData);
	const selectedTag = writable<string>('');

	return {
		subscribe,
		selectedTag: {
			subscribe: selectedTag.subscribe,
			set: selectedTag.set
		},
		fetchVideoDetails: async (videoId: string) => {
			if (!browser) return;
			update((prev) => ({ ...prev, isLoading: true }));
			try {
				const response = await fetch(`/api/mock/video/${videoId}`);
				const data = await response.json();
				set({ ...data, isLoading: false });
				selectedTag.set(data.tags[0]?.id || '');
			} catch (error) {
				console.error('Failed to fetch video details:', error);
				update((prev) => ({ ...prev, isLoading: false }));
			}
		},
		handleTagSelection: (tag: string) => {
			selectedTag.set(tag);
		}
	};
}

export const videoStore = createVideoStore();

