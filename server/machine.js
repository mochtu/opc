function Machine() {
    'use strict';

    const assert = require('assert');
    const configuration = {
        delay: 500,
        minTemperature: 0
    };
    let callbackList = [];
    let temperature;
    let intervalToken;


    /**
     * Update machine state.
     * Place all code for the simulation cycle here.
     * @return {undefined}
     */
    function update() {
        temperature += 1;
        let state = 'good';
        console.log('temperature: "' + temperature + '"');
        callbackList.forEach(function(element) {
            element(temperature, state)
        });
    }

    /**
     * Get the current temperature;
     * @return {number} Current temperature value.
     */
    function getTemperature() {
        return temperature;
    }

    /**
     * Register a callback function to be called on every update.
     * @param  {Function} callback Callback function. `callback(temperature, state);`.
     * @return {undefined}
     */
    function registerCallback(callback) {
        assert.equal(typeof (()=>{}), typeof callback);
        callbackList.push(callback);
    }

    /**
     * Start the machine and the simulation cycle.
     * @return {undefined}
     */
    function start() {
        temperature = configuration.minTemperature;
        intervalToken = setInterval(update, configuration.delay);
        console.log('Machine started');
    }

    /**
     * Start the cooling process.
     * @return {undefined}
     */
    function startCooling() {
        temperature = configuration.minTemperature;
    }

    /**
     * Stop the machine and clear the simulation cycle.
     * @return {undefined}
     */
    function stop() {
        clearInterval(intervalToken);
        console.log('Machine stopped');
    }

    this.getTemperature = getTemperature;
    this.registerCallback = registerCallback;
    this.start = start;
    this.startCooling = startCooling;
    this.stop = stop;
}

module.exports = Machine;
