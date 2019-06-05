const pathSep = require('path').sep;
const nodeModulesPrefix = pathSep + 'node_modules' + pathSep;
const reactNativeLibPrefix =
  nodeModulesPrefix + 'react-native' + pathSep + 'Libraries' + pathSep;
const jsScriptPrefix = 'js' + pathSep + 'script';
const jsScriptVirtualPrefix = jsScriptPrefix + pathSep + 'virtual';

const projectRootPath = __dirname;

function getNameFromPath(path, map) {
  let name = '';
  let relativePath = path.substr(projectRootPath.length + 1);
  if (path.indexOf(reactNativeLibPrefix) > 0) {
    name = path.substr(path.lastIndexOf(pathSep) + 1);
  } else if (path.indexOf(projectRootPath) == 0) {
    name = relativePath;
  }
  name = name.replace('.js', '').replace('.png', '');
  let regExp =
    pathSep == '\\' ? new RegExp('\\\\', 'gm') : new RegExp(pathSep, 'gm');
  name = name.replace(regExp, '_');
  // console.log(name, path);
  if (map) {
    map[name] = relativePath;
  }
  return name;
}

function createModuleIdFactory(map) {
  return () => {
    return path => getNameFromPath(path, map);
  };
}

function createPostProcessModulesFilter(map) {
  return module => {
    const projectRootPath = __dirname;
    if (module.path.indexOf('__prelude__') >= 0) {
      return false;
    }
    // check other dependencies
    if (module.path.indexOf(nodeModulesPrefix) > 0) {
      // console.log(module.path);
      // check dependencies
      const moduleType = module.output[0].type;
      if (map) {
        const name = getNameFromPath(module.path);
        if (jsScriptPrefix !== moduleType && !(name in map)) {
          // console.log(moduleType, name);
          return true;
        }
      }

      if (jsScriptVirtualPrefix === moduleType) {
        return true;
      }
      return false;
    }
    return true;
  };
}

module.exports = {
  createModuleIdFactory: createModuleIdFactory,
  createPostProcessModulesFilter: createPostProcessModulesFilter
};
