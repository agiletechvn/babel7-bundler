const {
  createModuleIdFactory,
  createPostProcessModulesFilter
} = require('./configUtils');

const map = require('./ios/platform.ios.bundle.json');

module.exports = {
  serializer: {
    createModuleIdFactory: createModuleIdFactory(),
    processModuleFilter: createPostProcessModulesFilter(map)
  }
};
