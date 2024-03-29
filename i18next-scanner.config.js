const typescriptTransform = require('i18next-scanner-typescript')

module.exports = {
	input: [
		'src/**/*.{ts,tsx,js,jsx}',
		'!i18n/**',
		'!src/**/*.spec.{ts,tsx,js,jsx}',
		'!**/node_modules/**',
	],
	output: './',
	options: {
		debug: true,
		sort: false,
		// removeUnusedKeys: false,
		removeUnusedKeys: true,
		func: {
			list: ['i18next.t', 'i18n.t', 't'],
			extensions: ['.js', '.jsx'],
		},
		trans: {
			component: 'Trans',
			i18nKey: 'i18nKey',
			defaultsKey: 'defaults',
			extensions: ['.js', '.jsx'],
			fallbackKey(ns, value) {
				return value
			},
		},
		defaultLng: ['en'],
		// this is done to fix the merge problem for devs, only main locale will be extracted
		// + this improves the speed for translations extract method
		lngs: ['en'],
		// lngs: [i18n.defaultLocale],
		ns: ['translation'],
		defaultNs: 'translation',
		resource: {
			loadPath: 'public/locales/{{lng}}/{{ns}}.json',
			savePath: 'public/locales/{{lng}}/{{ns}}.json',
			jsonIndent: 4,
			lineEnding: '\n',
		},
		keySeparator: '.', // key separator
		nsSeparator: ':', // namespace separator
		interpolation: {
			prefix: '{{',
			suffix: '}}',
		},
	},
	transform: typescriptTransform({
		extensions: ['.ts', '.tsx'],
		tsOptions: {
			target: 'es2018',
			module: 'esnext',
		},
	}),
}
