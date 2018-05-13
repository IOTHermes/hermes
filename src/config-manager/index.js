
const fs = require('fs-extra')
const p = require('path');

const loadDevices = require('./load-devices')
const loadRemote = require('./load-remote')

// Load configuration files for
// - devices
// - remotes

module.exports = (path = '../../config') => {
  let configs = {}

  const devicesConfig = fs.readJsonSync(p.join(__dirname, path , 'devices.json'), { throws: false });
  const remotesConfig = fs.readJsonSync(p.join(__dirname, path , 'remote.json'), { throws: false });

  return new Promise((resolve,reject) => {
    if(!devicesConfig){
      console.warn('Hey! Could not find any devices.json! No devices will be imported')
      configs.localDevices = []
    } else {
      configs.localDevices = loadDevices(devicesConfig);
    }

    if(!remotesConfig){
      configs.remotes = []
      console.warn('WARNING: Hey! Could not find any remotes.json. Ignoring remotes!')
      resolve(configs)
    } else {
      loadRemote(remotesConfig).then(remote => {
        configs.remote = remote;
        //console.log(configs.remote)
        resolve(configs)
      })
    }

  });

}
