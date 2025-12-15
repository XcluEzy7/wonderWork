
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/mock" | "/api/mock/comments" | "/api/mock/comments/[id]" | "/api/mock/replies" | "/api/mock/replies/[id]" | "/api/mock/shorts" | "/api/mock/shorts/[id]" | "/api/mock/stream" | "/api/mock/stream/[id]" | "/api/mock/users" | "/api/mock/users/[id]" | "/api/mock/videos" | "/api/mock/videos/[id]" | "/api/mock/video" | "/api/mock/video/[id]";
		RouteParams(): {
			"/api/mock/comments/[id]": { id: string };
			"/api/mock/replies/[id]": { id: string };
			"/api/mock/shorts/[id]": { id: string };
			"/api/mock/stream/[id]": { id: string };
			"/api/mock/users/[id]": { id: string };
			"/api/mock/videos/[id]": { id: string };
			"/api/mock/video/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/api": { id?: string };
			"/api/mock": { id?: string };
			"/api/mock/comments": { id?: string };
			"/api/mock/comments/[id]": { id: string };
			"/api/mock/replies": { id?: string };
			"/api/mock/replies/[id]": { id: string };
			"/api/mock/shorts": { id?: string };
			"/api/mock/shorts/[id]": { id: string };
			"/api/mock/stream": { id?: string };
			"/api/mock/stream/[id]": { id: string };
			"/api/mock/users": { id?: string };
			"/api/mock/users/[id]": { id: string };
			"/api/mock/videos": { id?: string };
			"/api/mock/videos/[id]": { id: string };
			"/api/mock/video": { id?: string };
			"/api/mock/video/[id]": { id: string }
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/mock" | "/api/mock/" | "/api/mock/comments" | "/api/mock/comments/" | `/api/mock/comments/${string}` & {} | `/api/mock/comments/${string}/` & {} | "/api/mock/replies" | "/api/mock/replies/" | `/api/mock/replies/${string}` & {} | `/api/mock/replies/${string}/` & {} | "/api/mock/shorts" | "/api/mock/shorts/" | `/api/mock/shorts/${string}` & {} | `/api/mock/shorts/${string}/` & {} | "/api/mock/stream" | "/api/mock/stream/" | `/api/mock/stream/${string}` & {} | `/api/mock/stream/${string}/` & {} | "/api/mock/users" | "/api/mock/users/" | `/api/mock/users/${string}` & {} | `/api/mock/users/${string}/` & {} | "/api/mock/videos" | "/api/mock/videos/" | `/api/mock/videos/${string}` & {} | `/api/mock/videos/${string}/` & {} | "/api/mock/video" | "/api/mock/video/" | `/api/mock/video/${string}` & {} | `/api/mock/video/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}