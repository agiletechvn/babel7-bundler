const getLegacyConfig = require('@react-native-community/cli/build/tools/getLegacyConfig')
  .default;
const buildBundle = require('@react-native-community/cli/build/commands/bundle/buildBundle')
  .default;
const outputBundle = require('metro/src/shared/output/bundle');
const fs = require('fs');
const program = require('commander');

const config = getLegacyConfig(__dirname);
config.root = __dirname;
config.reactNativePath = config.root + '/node_modules/react-native';

program
  .version('0.1.0')
  .option('-P, --platform [value]', 'Platform')
  .option('-m, --modules [value]', 'Modules', false)
  .parse(process.argv);

let platform = program.platform || 'ios';

const argv = {
  platform: platform,
  dev: false,
  bundleEncoding: 'utf8',
  config: 'bundle59.config.js'
};

argv.assetsDest = platform === 'ios' ? './ios/' : './android/app/src/main/res/';

const bundleOuputDest = entry =>
  platform === 'ios'
    ? `./ios/${entry}.ios.bundle`
    : `./android/app/src/main/assets/${entry}.android.bundle`;

const manifestFile = `${bundleOuputDest('platform')}.json`;

if (!manifestFile) {
  console.log('Must provide MANIFEST_OUTPUT env');
  process.exit(1);
}

const writeManifest = (filepath, excludeMap) => {
  // always save manifest file
  console.log(`Write map to : ${filepath}`);
  let filterMap;
  if (excludeMap) {
    filterMap = {};
    Object.keys(moduleMap)
      .filter(name => !(name in excludeMap))
      .forEach(name => (filterMap[name] = moduleMap[name]));
  } else {
    filterMap = moduleMap;
  }
  fs.writeFileSync(filepath, JSON.stringify(filterMap, null, 2));
};

const bundle = async () => {
  if (program.modules) {
    // bundle selected modules
    const modules = program.modules.trim().split(/\s*,\s*/);
    global.excludeMap = JSON.parse(fs.readFileSync(manifestFile));

    for (let module of modules) {
      const bundleOutput = bundleOuputDest(module);
      global.moduleMap = {};

      const result = await buildBundle(
        Object.assign({ entryFile: `${module}.js`, bundleOutput }, argv),
        config,
        outputBundle
      );

      writeManifest(`${bundleOutput}.json`, excludeMap);
    }
  } else {
    // bundle core system

    const bundleOutput = bundleOuputDest('platform');
    global.moduleMap = {};
    const result = await buildBundle(
      Object.assign({ entryFile: 'platform.js', bundleOutput }, argv),
      config,
      outputBundle
    );
    writeManifest(manifestFile);
  }
};

bundle();
