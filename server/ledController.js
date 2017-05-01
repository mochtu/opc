var Blinkt = require('node-blinkt'),
    BRIGHTNESS = 0.1,
    STATUS_PIXEL = 0,
    leds = new Blinkt();

leds.setup();

function centigrade2Pixel(temperature) {
    return Math.min(temperature * 6 / 80 + 1, 7);
}

module.exports = {
    setTemperature: function(temp){
        leds.setAllPixels(0, 0, 0, 0);

        var temperatureLevel =  centigrade2Pixel(temp);

        // display status
        if(temperatureLevel < 3) {
            leds.setPixel(STATUS_PIXEL, 0, 255, 0, BRIGHTNESS);
        } else if (temperatureLevel < 5) {
            leds.setPixel(STATUS_PIXEL, 255, 200, 20, BRIGHTNESS);
        } else {
            leds.setPixel(STATUS_PIXEL, 255, 0, 0, BRIGHTNESS);
        }

        // display temperature
        for (var i = 0; i < temperatureLevel; i++) {
            leds.setPixel(i+1, 220,10,40, BRIGHTNESS);
        }

        leds.sendUpdate();
    }
}
