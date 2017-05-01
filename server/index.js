var Machine = require('./machine');
var ledController = require("./ledController.js");
var opcServer = require("./opc_server.js");

var machine = new Machine();

function displayUpdate(value, state) {
    console.log('Index: update value: "' + value + '", state: "' + state + '"');
}

machine.start();
machine.registerCallback(displayUpdate);
machine.registerCallback(ledController.setTemperature);

opcServer.start(machine);

console.log('started');
