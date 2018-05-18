# Project Hermes

Hermes is an open source tool that helps you access data from all kinds of sensors.   
Data from:
* IoT devices available in your network;
* Arduino devices connected to your computer;
* Sensors connected to your Raspberry Pi;
* Cameras connected to your computer.

# Setup

## Clone the project

First things first, clone the Hermes Client project.

## Creating the required configurations

Then, on the root of your project, create a `config/` folder where you are going to place the configuration files.

Inside the `config/` folder create a file named `devices.json`. The file needs to look like this:

```
[
  {
    "id": "51f914340f171a37e123069c",
    "type":"FileLoader",
    "params": {
      "location": "<path to the folder containing the files you want to listen to>",
      "type": "*.jpg"
    }
  }
]
```

Now, if you have a remote server to send your device data, you need to configure it. This is done by creating a file named `remote.json` inside the `config/` folder. The content needs to look like this:

```
{
  "type":"HermesBackendLink",
  "params": {
    "authentication": {
      "email": "<your hermes cloud email goes here>",
      "password": "<your hermes password goes here>"
    }
  }
}
```

## Setting up the Raspberry PI

You can run Hermes on the Raspberry PI and get data from devices via GPIO.
Jump to [Run](#Run) if you are not running Hermes on a Raspberry. But make sure your Nodejs version is > 7. If not, please upgrade it.

### Upgrade Nodejs

Hermes runs on Nodejs > 7. By default your raspberry comes with Nodejs version 4.

Check the node version currently installed using the command `node --version`.


**Remove your old Nodejs Version**

```
apt-get remove nodered -y
apt-get remove nodejs nodejs-legacy -y
apt-get remove npm  -y
```

**Install version 8.9.0**

```
wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz
tar -xzf node-v8.9.0-linux-armv6l.tar.gz
cd node-v6.11.1-linux-armv6l/
sudo cp -R * /usr/local/
```

**Check the new version**
```
node -v
npm -v
```
You should now be ready to start.

# Run

To run you project type `npm start` into the terminal. Hermes will:
1. Import all your local devices from the `devices.json`;
2. Import your remote from `remote.json` and establish a connection to it;
3. Bridge your local devices with the ones that you have in the remote. This is done using the device ID;
4. Listen to changes on the local devices and push them to the remote.

# To explore

## I2C directly to the PI

https://github.com/nebrius/raspi-i2c

https://www.npmjs.com/package/htu21d-i2c

## TP-LINK api
Local: https://github.com/plasticrake/tplink-smarthome-api

Cloud: https://github.com/adumont/tplink-cloud-api
http://itnerd.space/2017/06/19/how-to-authenticate-to-tp-link-cloud-api/

## Smart Home Google integration
https://developers.google.com/actions/smarthome/create-app

## Arduino to PC
Johnny Five: https://github.com/rwaldron/johnny-five/issues/434

## Using IR leds
Arduino Library: https://github.com/z3t0/Arduino-IRremote

I2C:   
Github issue for reference: https://github.com/rwaldron/johnny-five/issues/434
https://www.arduino.cc/en/Tutorial/MasterWriter
