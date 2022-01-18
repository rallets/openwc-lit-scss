import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import typescript from '@rollup/plugin-typescript';
import litcss from 'rollup-plugin-lit-css';
import Sass from 'sass';

export default {
	input: 'src/index.ts',

	plugins: [
		// Resolve bare module specifiers to relative paths
		resolve({ extensions: ['.mjs', '.js', '.json', '.ts', '.scss'] }),

		// transform css files into Lit-compatible format
		litcss({
			include: '/**/*.scss',
			transform: (data, { filePath }) =>
				Sass.renderSync({ data, file: filePath })
					.css.toString(),
		}),

		// transform typescript
		typescript({
			include: ['src/index.ts', 'src/**/*.ts', 'globals.d.ts'],
		}),

		// Minify HTML template literals
		minifyHTML(),

		// Minify JS
		terser({
			ecma: 2020,
			module: true,
		}),

		// Print bundle summary
		summary({ showMinifiedSize: false }),
	],

	output: {
		dir: 'dist',
		sourcemap: true,
		preserveModules: true,
	},
	preserveEntrySignatures: 'strict',
};
