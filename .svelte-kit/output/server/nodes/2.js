

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.aGNjixQX.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/chunks/X7aOcs68.js"];
export const stylesheets = [];
export const fonts = [];
