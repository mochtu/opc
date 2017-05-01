var Blinkt = require('node-blinkt'),
    BRIGHTNESS = 0.1,
    leds = new Blinkt();

leds.setup();


module.export = {
    setTemperature: function(temp){
        leds.clearAll();
        for (var i = 0; i <= temp; i++) {
            leds.setPixel(i, 220,10,40, BRIGHTNESS);
        }
        leds.sendUpdate();
    }
}
