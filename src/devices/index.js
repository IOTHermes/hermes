
const chokidar = require('chokidar')
const base64 = require('file-base64');

/* Device types */
const FileLoader = require('./FileLoader');

module.exports = (type,params) => {
  return new FileLoader(params,{chokidar,base64});
}

// file watcher https://nodejs.org/docs/latest/api/fs.html#fs_class_fs_fswatcher
// https://www.npmjs.com/package/fs-extra
