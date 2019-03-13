require('../dist/main.js');
require('../dist/polyfills.js');
require('../dist/runtime.js');

const featureAppDefinition = {
  id: 'feature-app',

  create(env) {
    return {
      attachTo(containerDiv) {
        containerDiv.innerHTML =
          '<hello-world title="Feature Hub"></hello-world>';
      }
    };
  }
};

exports.default = featureAppDefinition;
