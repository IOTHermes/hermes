const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const assert = chai.assert;

const HTU = require('../../src/devices/HTU21D');

describe('HTU21D device', function() {

  const i2c_htu21d = class {
    readTemperature(cb){
      cb(42)
    }

    readHumidity(cb){
      cb(54.5)
    }
  }

  it('should read temperature values with the required interval', () => {
    let spiCallback = sinon.spy();
    // http://sinonjs.org/releases/v2.3.6/fake-timers/
    let clock = sinon.useFakeTimers();

    const htu = new HTU({
      timeoutDelay: 5
    },{i2c_htu21d})

    htu.onData(spiCallback)

    clock.tick(6);
    expect(spiCallback.callCount).to.be.equal(1);
    assert(spiCallback.calledWith( sinon.match({ temperature: { value: 42} }) ),'error')

    clock.tick(5);
    expect(spiCallback.callCount).to.be.equal(2);
    assert(spiCallback.calledWith( sinon.match({ humidity: { value: 54.5} }) ),'error')

  })

})
