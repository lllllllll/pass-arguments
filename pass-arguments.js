// how to test node pass-arguments.js one two=three four
process.argv.forEach(function (val, index) {
  console.log(index + ': ' + val);
});