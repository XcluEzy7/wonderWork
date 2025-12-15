import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const shorts = [
		{
			id: '1',
			thumbnail: 'thumbnail-1.jpg',
			title: 'This forest in America is the most exotic forest ever!!',
			views: '100K'
		},
		{
			id: '2',
			thumbnail: 'thumbnail-2.jpg',
			title: 'The Amount on Calories in this drink is beyond',
			views: '3.1M'
		},
		{
			id: '3',
			thumbnail: 'thumbnail-3.jpg',
			title: 'Motivation to Live! Wake up at 6a.m',
			views: '524'
		}
	];

	const id = params.id;
	const shortsResponse = {
		videoId: id,
		shorts
	};
	return json(shortsResponse);
};

