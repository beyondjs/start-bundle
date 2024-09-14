const SDK = require('@beyond-js/bundles-sdk');
const Packager = require('@beyond-js/bundles-sdk/transversal/packager');

module.exports = class extends Packager {
	constructor(...params) {
		super(...params);

		const { dependencies, application, distribution } = this;
		if (application.engine === 'legacy') {
			dependencies.add('@beyond-js/kernel/core');
			dependencies.add('@beyond-js/kernel/routing');
		}

		for (let bundle of SDK.bundles.values()) {
			if (!bundle.start?.Start) continue;
			if (typeof bundle.start.Start.dependencies !== 'function') continue;

			bundle.start.Start.dependencies(distribution).forEach(dependency => dependencies.add(dependency));
		}
	}
};
