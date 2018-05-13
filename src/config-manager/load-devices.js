
const devices = require('../devices');

module.exports = (configDevices) => {
  let loadedDevices = []

  for( configDevice in configDevices ){
    const deviceId = configDevices[configDevice].id
    const deviceType = configDevices[configDevice].type;
    let deviceParams = configDevices[configDevice].params;

    deviceParams.deviceId = deviceId;

    loadedDevices.push( devices(deviceType,deviceParams) )
  }
  return loadedDevices
}
