import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Profile = {
	id: string;
	name: string;
	given_name: string;
	family_name: string;
	email: string;
	picture: string;
	locale: string;
	isLoading: boolean;
};

const initialValue: Profile = {
	id: '',
	name: '',
	given_name: '',
	family_name: '',
	email: '',
	picture: '',
	locale: '',
	isLoading: false
};

function createProfileStore() {
	const { subscribe, set, update } = writable<Profile>(initialValue);

	return {
		subscribe,
		fetchUserDetails: async (userId: string) => {
			if (!browser) return;
			update((prev) => ({ ...prev, isLoading: true }));
			try {
				const response = await fetch(`/api/mock/users/${userId}`);
				const data = await response.json();
				set({ ...data, isLoading: false });
			} catch (error) {
				console.error('Failed to fetch user details:', error);
				update((prev) => ({ ...prev, isLoading: false }));
			}
		}
	};
}

export const profileStore = createProfileStore();

