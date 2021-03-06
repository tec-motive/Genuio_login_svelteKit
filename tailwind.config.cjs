const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			buttonColor: '#25484a'
		}),
		extend: {}
	},
	plugins: []
};

module.exports = config;
