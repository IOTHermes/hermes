Sensor TYPE: POWER_PLUG
Sensor NAME: TPLINK-HS100

On device found (fired everytime a new device is added to the network or the app starts):
SysInfo() result is:
```
{ err_code: 0,
  sw_ver: '1.1.3 Build 170608 Rel.204734',
  hw_ver: '1.0',
  type: 'IOT.SMARTPLUGSWITCH',
  model: 'HS100(EU)',
  mac: <MAC ADD of the device goes here>,
  deviceId: ... ? Is this sensitive ,
  hwId: ... ? Is this sensitive,
  fwId: ... ? Is this sensitive,
  oemId: ... ? Is this sensitive,
  alias: <name the user gives it via the KASA APP>,
  dev_name: 'Wi-Fi Smart Plug',
  icon_hash: '',
  relay_state: 0,
  on_time: 0,
  active_mode: 'none',
  feature: 'TIM',
  updating: 0,
  rssi: -48,
  led_off: 0,
  latitude: ... ? Is this sensitive,
  longitude: ... ? Is this sensitive,
  host: {
    ip: <ip of the device>,
    port: <port that the device is using>
  }
}
```

From device object we can get host and IP. It is not available in the sysInfo object:
* device.host: '192.168.1.111'
* device.port: 9999


Codes and meanings:

in-use:
```
{ err_code: 0,
     sw_ver: '1.1.3 Build 170608 Rel.204734',
     hw_ver: '1.0',
     type: 'IOT.SMARTPLUGSWITCH',
     model: 'HS100(EU)',
     icon_hash: '',
     relay_state: 1,
     on_time: 6,
     active_mode: 'none',
     feature: 'TIM',
     updating: 0,
     rssi: -48,
     led_off: 0,
     ...
     host: {
       ip: <ip of the device>,
       port: <port that the device is using>
     }
}
```

power-off:
```
{ err_code: 0,
     sw_ver: '1.1.3 Build 170608 Rel.204734',
     hw_ver: '1.0',
     type: 'IOT.SMARTPLUGSWITCH',
     model: 'HS100(EU)',
     icon_hash: '',
     relay_state: 0,
     on_time: 0,
     active_mode: 'none',
     feature: 'TIM',
     updating: 0,
     rssi: -48,
     led_off: 0,
     ...
     host: {
       ip: <ip of the device>,
       port: <port that the device is using>
     }
}
```
