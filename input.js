
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  return stdin.on('data', handleUserInput);
}

const handleUserInput = function(key) {

  if (key === 'b') {
    process.stdout.write('hello');
  }

  if (key === '\u0003') {
    process.exit();
  }

}


module.exports = { setupInput }