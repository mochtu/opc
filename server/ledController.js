var spawn = require('child_process').spawn;
var process = spawn('python', ["rgb.py", 0, 0, 255]);