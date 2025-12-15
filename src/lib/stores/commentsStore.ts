import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { videoStore } from './videoStore';

export type Comment = {
	id: string;
	picture: string;
	commenter: string;
	commented: string;
	comment: string;
	likes: number;
	dislikes: number;
	replies: number;
};

export type Comments = {
	videoId: string;
	comments: Comment[];
	isLoading: boolean;
};

const initialData: Comments = {
	videoId: '',
	comments: [],
	isLoading: false
};

function createCommentsStore() {
	const { subscribe, set, update } = writable<Comments>(initialData);

	// Auto-fetch when video changes
	if (browser) {
		videoStore.subscribe((video) => {
			if (video.id) {
				fetchComments(video.id);
			}
		});
	}

	const fetchComments = async (videoId: string) => {
		if (!browser) return;
		update((prev) => ({ ...prev, isLoading: true }));
		try {
			const response = await fetch(`/api/mock/comments/${videoId}`);
			const data = await response.json();
			set({ ...data, isLoading: false });
		} catch (error) {
			console.error('Failed to fetch comments:', error);
			update((prev) => ({ ...prev, isLoading: false }));
		}
	};

	return {
		subscribe,
		fetchComments
	};
}

export const commentsStore = createCommentsStore();

