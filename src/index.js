const Transversal = require('@beyond-js/bundles-sdk/transversal');
module.exports = {
	name: 'start',
	extname: ['.js', '.css'],
	bundle: {
		processors: ['less', 'scss', 'ts'],
		template: true,
	},
	transversal: {
		Packager: require('./packager'),
		Transversal,
		JsPackager: require('./js'),
	},
};
