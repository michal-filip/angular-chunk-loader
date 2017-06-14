var os = require('os');
var path = require('path');

module.exports.getSystemLoader = function(filePath, moduleName) {
  return 'System.import(\'' + filePath + '\')';
};

module.exports.getFilename = function(resourcePath) {
  var filename = path.basename(resourcePath);

  return path.basename(resourcePath, path.extname(filename));
};

module.exports.normalizeFilePath = function(filePath, relativePathMatch) {
  var newPath = filePath;

  if (relativePathMatch && !newPath.startsWith('./') && !newPath.startsWith('../')) {
    newPath = './' + newPath;
  }

  if (os.platform() === 'win32') {
    var path = newPath.replace(/\//g, '\\');
    newPath = path.replace(/\\/g, '\\\\');
  }

  return newPath;
}
