import babel from 'rollup-plugin-babel';

export default {
	input: 'node_modules/hyperhtml/esm/index.js',
	output: {
		format: 'es',
		file: 'hyperhtml.js'
	},
	plugins: [
		babel({
			presets: ['minify']
		})
	]
};
