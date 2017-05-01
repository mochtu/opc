/*global require,setInterval,console */
var opcua = require("node-opcua");

let external_machine;

let opcua_instance = new opcua.OPCUAServer({
    port: 4334, // the port of the listening socket of the server
    resourcePath: "OPCLabs/OvenServer", // this path will be added to the endpoint resource name
     buildInfo : {
        productName: "TheHighTempOvenServer",
        buildNumber: "7658",
        buildDate: new Date(2017,5,1)
    }
});

function post_initialize() {
    console.log("initialized");

    var addressSpace = opcua_instance.engine.addressSpace;

    // declare a new object
    var device = addressSpace.addObject({
        organizedBy: addressSpace.rootFolder.objects,
        browseName: "Oven"
    });


    opcua_instance.engine.addressSpace.addVariable({

        componentOf: device,

        nodeId: "ns=1;b=1020FFAA", // some opaque NodeId in namespace 4

        browseName: "Temperature",

        dataType: "Double",

        value: {
            get: function () {
                return new opcua.Variant({dataType: opcua.DataType.Double, value: external_machine.getTemperature() });
            },
            set: function (variant) {
                external_machine.startCooling();
                return opcua.StatusCodes.Good;
            }
        }
    });


    opcua_instance.start(function() {
        console.log("Server is now listening ... ( press CTRL+C to stop)");
        console.log("port ", opcua_instance.endpoints[0].port);
        var endpointUrl = opcua_instance.endpoints[0].endpointDescriptions()[0].endpointUrl;
        console.log(" the primary server endpoint url is ", endpointUrl );
    });
}

module.exports = {
    start: function(machine){
        external_machine = machine;
        opcua_instance.initialize(post_initialize);
    }
}

