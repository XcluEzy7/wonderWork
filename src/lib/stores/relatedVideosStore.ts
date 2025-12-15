import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { videoStore } from './videoStore';

export type RelatedVideo = {
	id: string;
	thumbnail: string;
	duration: string;
	title: string;
	channel: {
		id: string;
		name: string;
		isVerified: boolean;
	};
	views: string;
	posted: string;
	isNew: boolean;
};

export type RelatedVideos = {
	videos: RelatedVideo[];
	isLoading: boolean;
};

const initialData: RelatedVideos = {
	videos: [],
	isLoading: false
};

function createRelatedVideosStore() {
	const { subscribe, set, update } = writable<RelatedVideos>(initialData);

	// Auto-fetch when video changes
	if (browser) {
		videoStore.subscribe((video) => {
			if (!video.isLoading && video.id) {
				fetchVideos(video.id);
			}
		});
	}

	const fetchVideos = async (videoId: string) => {
		if (!browser) return;
		update((prev) => ({ ...prev, isLoading: true }));
		try {
			const response = await fetch(`/api/mock/videos/${videoId}`);
			const data = await response.json();
			set({ ...data, isLoading: false });
		} catch (error) {
			console.error('Failed to fetch related videos:', error);
			update((prev) => ({ ...prev, isLoading: false }));
		}
	};

	return {
		subscribe,
		fetchVideos
	};
}

export const relatedVideosStore = createRelatedVideosStore();

