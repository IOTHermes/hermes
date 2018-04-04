const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const assert = chai.assert;

const serialReadLine = require('../../../src/utils/arduino/serial').serialReadLine;

describe('serialReadLine', function() {
  it('should keep aggregating until \\n is received', () => {
    let spiCallback = sinon.spy();

    serialReadLine( (id , callback) => {
      callback([1,2]);
      callback([10]);
      callback([13]);
    } , 0 , spiCallback );

    assert(spiCallback.calledOnce);
    assert(spiCallback.calledWith( sinon.match.array.deepEquals([1,2,10,13]) ));

  })

  it('should keep aggregating a new string after \\n is received', () => {
    // http://sinonjs.org/
    let spiCallback = sinon.spy();

    serialReadLine( (id , callback) => {
      callback([1,2]);
      callback([10]);
      callback([13]);
      callback([51,52]);
      callback([10,13]);
    } , 0 , spiCallback )

    expect(spiCallback.callCount).to.be.equal(2);
    assert(spiCallback.calledWith( sinon.match.array.deepEquals([1,2,10,13]) ));
    assert(spiCallback.calledWith( sinon.match.array.deepEquals([51,52,10,13]) ));
  })

  it('should not return if \\n is not received', () => {
    // http://sinonjs.org/
    let spiCallback = sinon.spy();

    serialReadLine( (id , callback) => {
      callback([1,2]);
      callback([10]);
      callback([13]);
      callback([51,52]);
    } , 0 , spiCallback )

    expect(spiCallback.callCount).to.be.equal(1);
    assert(spiCallback.calledWith( sinon.match.array.deepEquals([1,2,10,13]) ))
    //assert.equals(spiCallback.callCount, 1)
  })






})
