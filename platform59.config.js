const { createModuleIdFactory } = require('./configUtils');
const fs = require('fs');
const map = {};

module.exports = {
  serializer: {
    createModuleIdFactory: createModuleIdFactory(map)
  }
};

process.on('exit', code => {
  let manifestFile = process.env.MANIFEST_OUTPUT;
  if (!manifestFile) {
    for (let i = 0; i < process.argv.length; ++i) {
      if (process.argv[i] === '--bundle-output') {
        manifestFile = process.argv[i + 1] + '.json';
        break;
      }
    }
  }

  console.log(`Write map to : ${manifestFile}`);
  fs.writeFileSync(manifestFile, JSON.stringify(map, null, 2));
});
