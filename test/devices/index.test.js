const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const deviceSelector = require('../../src/devices');

describe('Device selector (devices/index.js)', function() {

  const deviceConfigA = {
    "type":"FileLoader",
    params: {
      "deviceId": "A",
      "location": "./devices",
      "type": "*.png"
    }
  }

  const deviceConfigB = {
    "type":"HTU21D",
    params: {
      "deviceId": "B"
    }
  }

  it('should select the right device', () => {
    const deviceSelectedA = deviceSelector(deviceConfigA.type,deviceConfigA.params)

    console.log(deviceSelectedA.getID())
    expect(deviceSelectedA.getID()).to.be.equal('A')

    const deviceSelectedB = deviceSelector(deviceConfigB.type,deviceConfigB.params)
    expect(deviceSelectedB.getID()).to.be.equal('B')
  })

})
