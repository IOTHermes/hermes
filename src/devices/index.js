
const deps = {
  chokidar: require('chokidar'),
  base64: require('file-base64'),
  i2c_htu21d: require('htu21d-i2c')
}

/* Device models */
const deviceModels = {
  FileLoader: require('./FileLoader'),
  HTU21D: require('./HTU21D')
}

module.exports = (type,params) => {
  return new deviceModels[type](params,deps);
}

// file watcher https://nodejs.org/docs/latest/api/fs.html#fs_class_fs_fswatcher
// https://www.npmjs.com/package/fs-extra
