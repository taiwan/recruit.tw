import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	input: 'app.js',
	output: {
		format: 'es',
		file: 'script.js'
	},
	plugins: [
		resolve(),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'node_modules/hyperhtml/hyperhtml.js': [
					'hyper',
					'bind',
					'wire',
					'Component'
				]
			}
		}),
		babel({
			presets: ['minify']
		})
	]
};
