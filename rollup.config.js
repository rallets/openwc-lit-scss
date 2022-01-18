// @ts-check
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import typescript from '@rollup/plugin-typescript';
import litCss from 'rollup-plugin-lit-css';

export default {
	input: 'src/index.ts',

	plugins: [
		// Resolve bare module specifiers to relative paths
		resolve({ extensions: ['.mjs', '.js', '.json', '.ts', '.css'] }),

		// transform css files into Lit-compatible format
		litCss({ include: ['src/**/*.css'] }),

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
		// preserveModules: true,
	},
	preserveEntrySignatures: 'strict',
};

// import merge from 'deepmerge';
// // use createSpaConfig for bundling a Single Page App
// // import { createSpaConfig } from '@open-wc/building-rollup';
// // import copy from 'rollup-plugin-copy';
// import litcss from 'rollup-plugin-lit-css';
// // import Sass from 'sass';
// import nodeResolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';

// // use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';

// // const baseConfig = createSpaConfig({
// // 	// use the outputdir option to modify where files are output
// // 	// outputDir: 'dist',

// // 	// if you need to support older browsers, such as IE11, set the legacyBuild
// // 	// option to generate an additional build just for this browser
// // 	// legacyBuild: true,

// // 	// development mode creates a non-minified build for debugging or development
// // 	developmentMode: process.env.ROLLUP_WATCH === 'true',

// // 	// set to true to inject the service worker registration into your index.html
// // 	injectServiceWorker: false,
// // });

// const baseConfig = createBasicConfig({
// 	// input: 'index.html',
// 	output: {
// 		dir: 'lib',
// 		sourcemap: true,
//     // preserveModules: true,
// 	},
// 	preserveEntrySignatures: 'strict',
// });

// export default merge(baseConfig, {
// 	// if you use createSpaConfig, you can use your index.html as entrypoint,
// 	// any <script type="module"> inside will be bundled by rollup
// 	// input: 'index.html',

// 	// alternatively, you can use your JS as entrypoint for rollup and
// 	// optionally set a HTML template manually
// 	input: 'src/index.ts',

// 	plugins: [
// 		nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts', '.css'] }),

// 		// Make sure to list litcss *after* the styles-plugin.
// 		litcss({
// 			include: ['src/**/*.css'],
// 			// specifier: 'lit-element',
// 			// transform: (data, { filePath }) => {
// 			// 	console.log(data, filePath);
// 			// 	return Sass.compile(filePath).css.toString();
// 			// },
// 		}),

// 		// transform typescript
// 		typescript({
// 			include: ['src/index.ts', 'src/**/*.ts', 'globals.d.ts'],
// 		}),

// 		/** Copy assets to build output */
// 		// copy({
// 		// 	targets: [{ src: 'src/assets/**/*', dest: './dist/src' }],
// 		// 	// set flatten to false to preserve folder structure
// 		// 	flatten: false,
// 		// }),

		
// 	],
	
// });
