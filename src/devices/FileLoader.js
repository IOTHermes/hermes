
var p = require('path');

class FileLoader{
  constructor(params, deps = {}){
    this.deviceId = params.deviceId;

    this.onDataCb = null;
    const loadFrom = p.join( params.location , params.type );

    console.log(`FileLoader registered to path ${loadFrom}`)

    // /\.(gif|jpg|jpeg|tiff|png)$/i
    deps.chokidar.watch(loadFrom,{
      ignoreInitial:true
    }).on('add', (path, stats ) => {
      deps.base64.encode(path, (err, base64) => {
        if(this.onDataCb){
          this.onDataCb({
            infraredImage: {
              path,
              name: p.basename(path),
              base64,
              createdAt: stats.atime
            }
          });
        }
      });
    });
  }

  getID(){
    return this.deviceId;
  }

  onData(cb){
    this.onDataCb = cb;
  }

  setRemoteDevice(remoteDevice){
    this.remoteDevice = remoteDevice;
  }

  getRemoteDevice(){
    return this.remoteDevice
  }
}

module.exports = FileLoader;
