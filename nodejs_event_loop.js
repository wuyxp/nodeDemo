const fs = require('fs');

console.log('start');
setTimeout(function timeout() {
  console.log('模块外部timeout');
}, 1000);

setImmediate(function immediate() {
  console.log('模块外部immediate');
});

process.nextTick(() => {
  console.log('模块外部nextTick callback');
});

fs.readFile(__filename, () => {
  console.log('模块外部的 readFile');
  setTimeout(function timeout() {
    console.log('I/O内部timeout');
  }, 0);

  setImmediate(function immediate() {
    console.log('I/O内部immediate');
  });

  
  fs.readFile(__filename, () => {
    console.log('I/O内部的 readFile');
    setTimeout(function timeout() {
      console.log('I/O内部----I/O内部的---timeout');
    }, 0);

    setImmediate(function immediate() {
      console.log('I/O内部-----I/O内部的-----immediate');
    });

    

    process.nextTick(() => {
      console.log('I/O内部nextTick callback');
    });
  });


  process.nextTick(() => {
    console.log('I/O内部nextTick callback');
  });
});

console.log('end');

/*
start
end
模块外部nextTick callback
模块外部immediate
模块外部的 readFile
I/O内部nextTick callback
I/O内部immediate
I/O内部timeout
I/O内部的 readFile
I/O内部nextTick callback
I/O内部-----I/O内部的-----immediate
I/O内部----I/O内部的---timeout
模块外部timeout
*/