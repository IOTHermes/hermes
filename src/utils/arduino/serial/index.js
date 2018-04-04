
const arrayEquals = require('array-equal')

module.exports.serialReadLine = (serialRead, portId , callback) => {
  const endIndigator = [ 10 , 13 ];
  let aggregatedArray = [];

  serialRead(portId , data => {
    aggregatedArray = aggregatedArray.concat(data);

    //check if full data was received
    if( arrayEquals(aggregatedArray.slice(aggregatedArray.length-2 , aggregatedArray.length) , endIndigator) ){
      callback(aggregatedArray);
      aggregatedArray = [];
    }
  })

}
