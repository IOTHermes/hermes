#include <IRremote.h>
#include <Wire.h>

// connect your IR thing to pin 11
IRrecv irrecv(11);

decode_results results;

int address = 8;
int value = 0;

void setup() {
  Serial.begin(9600); 
  Wire.begin(address);
  Wire.onRequest(onRequest);

  irrecv.enableIRIn();
}

void loop() {
  if (irrecv.decode(&results)) {
    int codeType = results.decode_type; 
    Serial.println(codeType);
    Serial.println(NEC);
    if(results.value != REPEAT){ 
      value = results.value;
      Serial.println(value,HEX);
    }
    irrecv.resume();
    
  }
}

void onRequest() {
  Serial.println("Received an I2C request");
  Serial.println(sizeof(value));
  Serial.println(value,HEX);
  Wire.write((byte *) &value, sizeof (value));
}
