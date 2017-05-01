var Blinkt = require('node-blinkt'),
    BRIGHTNESS = 0.1,
    leds = new Blinkt();

leds.setup();


module.exports = {
    setTemperature: function(temp){
        if(temp>6)temp=6;
        leds.setAllPixels(0, 0, 0, 0);
        for (var i = 0; i <= temp; i++) {
            leds.setPixel(i, 220,10,40, BRIGHTNESS);
        }
        leds.sendUpdate();
    }
}
