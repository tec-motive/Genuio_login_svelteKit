import { writable } from 'svelte/store';

export const ApiCheckers = writable([]);

const fetchChecker = () => {
	const url =
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=311cac09443e5649e1e367326d252e77&page=1';

	fetch(url, {
		method: 'GET'
	})
		.then((res) => res.json())
		.then((res) => {
			ApiCheckers.set(res.results);
		})
		.catch((err) => {
			console.error(err);
		});
};

fetchChecker();
