
class FileLoader{
  constructor(props, deps = {}){

    // /\.(gif|jpg|jpeg|tiff|png)$/i
    deps.chokidar.watch('*.js|*.txt').on('add', (path, stats ) => {
      console.log(path);
    });
  }
}

module.exports = FileLoader;
