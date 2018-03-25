

/*
  I decided not to pursue i2c anymore since it is not the best approach if you
  intend to raise real time events when a new IR code is received
*/


var five = require('johnny-five');
var board = new five.Board();

function buf2hex(buffer) { // buffer is an ArrayBuffer
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

board.on("ready", function() {
  console.log('READY')
  this.io.i2cConfig();

  //this.io.i2cRead(8,2,data => {
  this.io.sendI2CReadRequest(8,2,data => {
    console.log(data)
    console.log( buf2hex(data.reverse()) )
  })


// Help docs
// https://github.com/rwaldron/johnny-five/wiki/Board
// https://github.com/firmata/firmata.js#i2c


});
