// Maximum transmit power
function onInit() {
  NRF.setTxPower(4);
}

var counter = 0;

var energy = 0;

var lastpulse = Date.now();

var pulsetime = 0;

var power = 0;

// change this to match your meter - e.g. 3200 imp / kWh
var imp = 3200;

// Update BLE advertising
function update()   {
NRF.setAdvertising([
  [
0x02,0x01,0x06,
0x05,0x09,0x50,0x75,0x63,0x6B,
0x10,0x16,0x1C,0x18,0x02,0x01,Puck.getBatteryPercentage(),0x04,0x0B,power,power>>8,power>>16,0x04,0x0A,energy,energy>>8,energy>>16,
]]); 
}

// Baseline 10s update
setInterval(function() {
  update();
}, 10000);

// Calculate live wattage
function rate() {
  pulsetime = Date.now() - lastpulse;
  power = (3600000000 / imp) / pulsetime;
  power = Number(power.toFixed(2));
  lastpulse = Date.now();
  energy = counter * 0.0003125;
  energy = Number(energy.toFixed(3));
}

// Set up pin states
D1.write(0);
pinMode(D2,"input_pullup");

// Watch for pin changes
setWatch(function(e) {
 counter++;
 rate();
// update();
 digitalPulse(LED1,1,1);
}, D2, { repeat:true, edge:"falling" });
