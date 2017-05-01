function Machine() {
    'use strict';

    const delay = 500;
    let temperature;
    let intervalToken;


    /**
     * Update machine state.
     * Place all code for the simulation cycle here.
     * @return {undefined}
     */
    function update() {
        console.log('temperature: "' + temperature + '"');
        temperature += 1;
    }

    /**
     * Start the machine and the simulation cycle.
     * @return {undefined}
     */
    function start() {
        temperature = 17;
        intervalToken = setInterval(update, delay);
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

    this.start = start;
    this.stop = stop;
}

module.exports = Machine;
