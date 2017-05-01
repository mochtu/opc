var Machine = require('./machine');

var machine = new Machine();
machine.start();

console.log('started');
setTimeout(function() {
    console.log('done,');
    machine.stop();
}, 5000)
