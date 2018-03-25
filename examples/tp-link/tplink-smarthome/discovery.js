const { Client } = require('tplink-smarthome-api');

const client = new Client();

// Look for devices, log to console
client.startDiscovery().on('device-new', (device) => {

  //TODO append host to getSysInfo result

  device.getSysInfo().then(console.log);

  device.on('power-on', () => {
    device.getSysInfo().then(console.log);
  })

  device.on('power-off', () => {
    device.getSysInfo().then(console.log);
  })

  device.on('in-use', () => {
    device.getSysInfo().then(console.log);
  })

  device.on('not-in-use', () => {
    device.getSysInfo().then(console.log);
  })

  //device.setPowerState(true);
});
