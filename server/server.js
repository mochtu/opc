var Machine = require('./machine');

var machine = new Machine();

function displayUpdate(value, state) {
    console.log('Index: update value: "' + value + '", state: "' + state + '"');
}

machine.start();
machine.registerCallback(displayUpdate);

console.log('started');
setTimeout(function() {
    console.log('done,');
    machine.stop();
}, 5000)
