
// https://www.npmjs.com/package/htu21d-i2c

const readTemperatureHumidity = (hut) => {
  //TODO
}

class HTU21D{
  constructor(params, deps = {}){
    this.deviceId = params.deviceId;

    this.onDataCb = null;

    const htu21df = new deps.i2c_htu21d();

    this.dataInterval = setInterval(() => {
      let data = {
        temperature: {},
        humidity: {}
      };

      htu21df.readTemperature((temp) => {
        data.temperature = {
          value: temp,
          units: 'C'
        }

        htu21df.readHumidity((humidity) => {
          data.humidity = {
            value: humidity,
            units: 'RH%'
          }

          if(this.onDataCb) this.onDataCb(data)
        });
      });
    }, params.timeoutDelay);

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

module.exports = HTU21D;
