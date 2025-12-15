

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DadpVVbK.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/chunks/X7aOcs68.js"];
export const stylesheets = ["_app/immutable/assets/0.DqY7cTiL.css"];
export const fonts = [];
