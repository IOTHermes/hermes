var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("ready!")

  const portId = 8;

  this.io.serialConfig({ portId, baud: 9600, rxPin: 10, txPin: 11 });
  //this.io.serialListen(8)
  this.io.serialRead(portId, function(data) {
    console.log('data has been received')
    console.log(data);
  });

});


// http://www.firmatabuilder.com/



// http://robotic-controls.com/learn/arduino/arduino-arduino-serial-communication
