var five = require("johnny-five");
var board = new five.Board();

const ab2str = require('arraybuffer-to-string')

//Requires StandardFimataPlus!! and can only be compiled correctly with arduino > 1.6.0

board.on("ready", function() {
  console.log("ready!")

  const portId = 8;

  this.io.serialConfig({ portId, baud: 9600, rxPin: 10, txPin: 11 });


  //this function fires everytime a few chars are received. A string needs to be built by aggregating multiple calls until \n ([10,13]) is reveived
  this.io.serialRead(portId, function(data) {
    console.log('data has been received')
    console.log( `${ab2str(data)} - ${data}`  );
  });

});


// http://www.firmatabuilder.com/
// http://robotic-controls.com/learn/arduino/arduino-arduino-serial-communication
