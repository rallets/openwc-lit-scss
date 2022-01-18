/* eslint-disable no-undef */
// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import rollupLitcss from 'rollup-plugin-lit-css';
import { fromRollup } from '@web/dev-server-rollup';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import Sass from 'sass';

const litcss = fromRollup(rollupLitcss);

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
	open: '/demo/',
	/** Use regular watch mode if HMR is not enabled. */
	watch: !hmr,
	/** Resolve bare module imports */
	// nodeResolve: {
	// 	exportConditions: ['browser', 'development'],
	// },
	nodeResolve: true,

	// tell the server to serve css files as js
	mimeTypes: {
		'src/**/*.scss': 'js',
	},

	/** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
	// esbuildTarget: 'auto'

	/** Set appIndex to enable SPA routing */
	// appIndex: 'demo/index.html',

	plugins: [
		/** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
		// hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),

		litcss({
			include: ['src/**/*.scss'],
			transform: (data, { filePath }) =>
				Sass.renderSync({ data, file: filePath })
					.css.toString(),
		}),

		esbuildPlugin({
			ts: true,
		}),
	],

	// See documentation for all available options
});
