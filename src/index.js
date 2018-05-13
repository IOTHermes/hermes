
//const devices = require('./devices')
//const remotes = require('./remotes')
const configManager = require('./config-manager')
const bridge = require('./bridge')

configManager()
.then(res=>bridge(res.localDevices,res.remote))
.then(devices => {
  devices.forEach(device =>{
    console.log(`Listening to data from ${device.getRemoteDevice().getAlias()}`)
    device.onData( data => {
      console.log(`Got data from ${device.getRemoteDevice().getAlias()}`,data)
      console.log(device.getRemoteDevice().getProperties())

      device.getRemoteDevice().addLog(data);
    })
  })
})
