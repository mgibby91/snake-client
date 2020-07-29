
// const net = require('net');

const { connect } = require('./client');


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  return stdin;
}

const handleUserInput = function(key) {

  if (key === 'b') {
    process.stdout.write('hello');
  }

  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!');
    process.exit();
  }

}


console.log('Connecting...')
connect();
const mySetupInput = setupInput();

mySetupInput.on('data', handleUserInput);
