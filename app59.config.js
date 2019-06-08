const {
  createModuleIdFactory,
  createPostProcessModulesFilter
} = require('./configUtils');

let manifestFile = process.env.MANIFEST_OUTPUT;

if (!manifestFile) {
  console.log('Must provide MANIFEST_OUTPUT env');
  process.exit(1);
}

const map = require(manifestFile);

module.exports = {
  serializer: {
    createModuleIdFactory: createModuleIdFactory(),
    processModuleFilter: createPostProcessModulesFilter(map)
  }
};
