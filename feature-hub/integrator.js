const {createFeatureHub} = require('@feature-hub/core');
const {defineFeatureAppLoader} = require('@feature-hub/dom');
const {loadAmdModule} = require('@feature-hub/module-loader-amd');

const {featureAppManager} = createFeatureHub('integrator', {
  moduleLoader: loadAmdModule
});

defineFeatureAppLoader(featureAppManager);
