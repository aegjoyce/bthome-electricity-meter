# BTHome Electricity Meter
Code for an impulse-based electricity meter using Puck.js and BTHome for Home Assistant.

This code allows Home Assistant to read total energy usage (kWh) and live power consumption (W) from an electricity meter with an impulse light, using a Puck.js beacon.
Data is broadcast using the BTHome BLE protocol - see https://bthome.io.

## Instructions

1. Get a Puck.js beacon and set it up with an LDR as per the instructions at https://www.espruino.com/Smart+Meter.
2. Use the Espruino Web IDE to write the contents of `meter.js` to your device. Change the `imp` variable to match the value for impulses/kWh on your electricity meter (this can vary).
3. Attach the Puck.js to your meter.

With Discovery enabled you should see a new device called Puck in your Home Assistant devices. If you're struggling with range you can set up an ESP32 with `bluetooth_proxy` to act as a range extender for your BLE network.

<img width="1097" alt="Screenshot 2022-10-05 at 13 35 29" src="https://user-images.githubusercontent.com/47081267/194061613-def87e2e-88a2-4805-8c84-1076cbc1a149.png">
