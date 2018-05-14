const _ = require('lodash')

// Links local devices with remotes

module.exports = (localDevices , remote) =>{
  //console.log(localDevices)

  return remote.getDevices()
  .then(remoteDevices =>{
    console.log(`Retrieved ${remoteDevices.length} devices from the remote`)
    console.log('Matching remote with local devices')

    remoteDevices.forEach(remoteDevice => {
      //Finding match with localDevice
      const matchIndex = _.findIndex(localDevices, ld => ld.getID().toString() == remoteDevice.getID().toString())

      if(matchIndex > -1){
        console.log(`  + Found a match for ${remoteDevice.getID()} - ${remoteDevice.getAlias()}`)
        localDevices[matchIndex].setRemoteDevice(remoteDevice)
      }
    });

    return localDevices;
  })
}
