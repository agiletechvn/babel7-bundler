const pathSep = require('path').sep;

const nodeModulesPrefix = `${pathSep}node_modules${pathSep}`;
const reactNativeLibPrefix = `${nodeModulesPrefix}react-native${pathSep}Libraries${pathSep}`;
const jsScriptPrefix = `js${pathSep}script`;

const projectRootPath = __dirname;

function getNameFromPath(path, map) {
  let name = '';
  const relativePath = path.substr(projectRootPath.length + 1);
  if (path.indexOf(reactNativeLibPrefix) > 0) {
    name = path.substr(path.lastIndexOf(pathSep) + 1);
  } else if (path.indexOf(projectRootPath) === 0) {
    name = relativePath;
  }
  name = name.replace('.js', '').replace('.png', '');
  const regExp =
    pathSep === '\\' ? new RegExp('\\\\', 'gm') : new RegExp(pathSep, 'gm');
  name = name.replace(regExp, '_');
  // console.log(name, path);
  if (map) {
    map[name] = relativePath;
  }
  return name;
}

function createModuleIdFactory() {
  return path => getNameFromPath(path, global.moduleMap);
}

function processModuleFilter(module) {
  const projectRootPath = __dirname;
  if (
    module.path.indexOf('__prelude__') >= 0 ||
    module.output[0].type === jsScriptPrefix
  ) {
    return false;
  }

  if (global.excludeMap) {
    const name = getNameFromPath(module.path);
    if (!(name in global.excludeMap)) {
      // console.log(moduleType, name);
      return true;
    }
  }

  return false;
}

const serializer = {
  createModuleIdFactory: createModuleIdFactory
};
// add excludeMap
if (global.excludeMap) {
  serializer.processModuleFilter = processModuleFilter;
}

module.exports.serializer = serializer;
