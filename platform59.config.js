const { createModuleIdFactory } = require('./configUtils');
const fs = require('fs');
const map = {};

module.exports = {
  serializer: {
    createModuleIdFactory: createModuleIdFactory(map)
  }
};

process.on('exit', code => {
  for (let i = 0; i < process.argv.length; ++i) {
    if (process.argv[i] === '--bundle-output') {
      const manifestFile = process.argv[i + 1] + '.json';
      console.log(`Write map to : ${manifestFile}`);
      fs.writeFileSync(manifestFile, JSON.stringify(map, null, 2));
      break;
    }
  }
});
