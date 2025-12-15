import { derived, writable } from 'svelte/store';
import { timeFormat } from '../utils/timeFormat';

export type ControlsState = {
	isPlaying: boolean;
	isAutoplayEnabled: boolean;
	percentage: number;
	seek: number;
	loaded: number;
	totalSeek: number;
	percentages: number[];
	showControls: boolean;
	animatePlay: string | null;
	volume: number;
	isFullscreen: boolean;
	playbackSpeed: number;
	theaterMode: boolean;
	pipMode: boolean;
	seekSync: number;
};

const initialState: ControlsState = {
	isPlaying: false,
	isAutoplayEnabled: true,
	percentage: 0,
	seek: 0,
	loaded: 0,
	totalSeek: 900,
	percentages: [100],
	showControls: true,
	animatePlay: null,
	volume: 100,
	isFullscreen: false,
	playbackSpeed: 1,
	theaterMode: false,
	pipMode: false,
	seekSync: 0
};

function createControlsStore() {
	const { subscribe, update, set } = writable<ControlsState>(initialState);
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	// Derived stores for formatted time
	const formattedSeek = derived(
		{ subscribe },
		($state) => timeFormat($state.seek)
	);
	const formattedTotal = derived(
		{ subscribe },
		($state) => timeFormat($state.totalSeek)
	);

	return {
		subscribe,
		formattedSeek,
		formattedTotal,
		setPercentage: (percentage: number) => {
			update((state) => {
				const newState = {
					...state,
					percentage,
					seek: state.totalSeek * (percentage / 100)
				};
				if (percentage >= 100) {
					newState.isPlaying = false;
					newState.showControls = true;
				}
				return newState;
			});
		},
		setSeek: (seek: number) => {
			update((state) => ({ ...state, seek }));
		},
		setTotalSeek: (totalSeek: number) => {
			update((state) => ({ ...state, totalSeek }));
		},
		playVideo: () => {
			update((state) => {
				const newState = { ...state, isPlaying: true };
				// Animate play
				newState.animatePlay = 'play';
				if (timeoutId) clearTimeout(timeoutId);
				timeoutId = setTimeout(() => {
					update((s) => ({ ...s, animatePlay: null }));
				}, 1000);
				return newState;
			});
		},
		pauseVideo: () => {
			update((state) => {
				const newState = { ...state, isPlaying: false };
				// Animate pause
				newState.animatePlay = 'pause';
				if (timeoutId) clearTimeout(timeoutId);
				timeoutId = setTimeout(() => {
					update((s) => ({ ...s, animatePlay: null }));
				}, 1000);
				return newState;
			});
		},
		toggleAutoplay: () => {
			update((state) => ({
				...state,
				isAutoplayEnabled: !state.isAutoplayEnabled
			}));
		},
		displayControls: () => {
			update((state) => ({ ...state, showControls: true }));
		},
		hideControls: () => {
			update((state) => ({ ...state, showControls: false }));
		},
		setVolume: (volume: number) => {
			update((state) => ({ ...state, volume }));
		},
		setLoaded: (loaded: number) => {
			update((state) => ({ ...state, loaded }));
		},
		toggleFullscreen: () => {
			update((state) => {
				if (!state.pipMode) {
					return { ...state, isFullscreen: !state.isFullscreen };
				}
				return state;
			});
		},
		setPlaybackSpeed: (playbackSpeed: number) => {
			update((state) => ({ ...state, playbackSpeed }));
		},
		toggleTheaterMode: () => {
			update((state) => ({
				...state,
				theaterMode: !state.theaterMode
			}));
		},
		togglePipMode: () => {
			update((state) => {
				if (!state.isFullscreen) {
					return { ...state, pipMode: !state.pipMode };
				}
				return state;
			});
		},
		setSeekSync: (seekSync: number) => {
			update((state) => ({ ...state, seekSync }));
		}
	};
}

export const controlsStore = createControlsStore();

