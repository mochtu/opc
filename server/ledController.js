var Blinkt = require('node-blinkt'),
    BRIGHTNESS = 0.1,
    STATUS_PIXEL = 0,
    leds = new Blinkt();

leds.setup();


module.exports = {
    setTemperature: function(temp){
        leds.clearAll();

        // display status
        if(temp < 4) {
            leds.setPixel(STATUS_PIXEL, 0, 255, 0, BRIGHTNESS);
        } else if (temp < 6) {
            leds.setPixel(STATUS_PIXEL, 200, 200, 0, BRIGHTNESS);
        } else {
            leds.setPixel(STATUS_PIXEL, 255, 0, 0, BRIGHTNESS);
        }

        // display temperature
        for (var i = 0; i <= temp; i++) {
            leds.setPixel(i+1, 220,10,40, BRIGHTNESS);
        }
        leds.sendUpdate();
    }
}
