

const chokidar = require('chokidar')


const FileLoader = require('./FileLoader');

const fileLoader = new FileLoader({},{chokidar});

// file watcher https://nodejs.org/docs/latest/api/fs.html#fs_class_fs_fswatcher
// https://www.npmjs.com/package/fs-extra
