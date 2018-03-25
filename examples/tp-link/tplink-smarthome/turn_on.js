const { Client } = require('tplink-smarthome-api');

const client = new Client();
const plug = client.getDevice({host: '192.168.0.105'}).then((device)=>{
  device.getSysInfo().then(console.log);
  device.setPowerState(true);
});


// Look for devices, log to console
client.startDiscovery().on('device-new', (device) => {
  device.getSysInfo().then(console.log);
  console.log(device)
  //device.setPowerState(true);
});
