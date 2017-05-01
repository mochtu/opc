function Machine() {
    'use strict';

    const assert = require('assert');

    const configuration = {
        delay: 500,
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
        temperature = 17;
        intervalToken = setInterval(update, configuration.delay);
        console.log('Machine started');
    }

    /**
     * Stop the machine and clear the simulation cycle.
     * @return {undefined}
     */
    function stop() {
        clearInterval(intervalToken);
        console.log('Machine stopped');
    }

    this.registerCallback = registerCallback;
    this.start = start;
    this.stop = stop;
}

module.exports = Machine;
