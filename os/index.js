const os = require('os');

console.log('cpu architecture:'+ os.arch());
console.log('free memory:'+os.freemem());
console.log('total memory:'+os.totalmem());
// console.log('network interfaces:'+json.stringify(os.networkInterfaces()));
console.log('os default tempt dir:'+os.tmpdir());

console.log('Endianess:'+os.endianness());
console.log('Hostname:'+os.hostname());
console.log('os type:'+os.type());
console.log('os platform:'+os.platform());
console.log('os release:'+os.release());
