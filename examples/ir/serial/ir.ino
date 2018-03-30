#include <IRremote.h>
#include <SoftwareSerial.h>

// connect your IR thing to pin 11
IRrecv irrecv(9);

decode_results results;

int value = 0;

char buffer[20];

SoftwareSerial mySerial(10, 11); // RX, TX

void setup() {
  Serial.begin(9600);
  //mySerial.begin(57600);

  irrecv.enableIRIn();
}

void loop() {
  if (irrecv.decode(&results)) {
    if(results.value != REPEAT){
      value = results.value;

      sprintf(buffer, "$IR_RECEIVER %04x", value);

      Serial.println(buffer);
      //mySerial.println(buffer);
    }
    irrecv.resume();
  }
  Serial.println("$hello world!!");
  delay(1000);
}
