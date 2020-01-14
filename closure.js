// closure homework from frontendmasters course
// js the hard parts by Will Sentence

function outer (){
    let counter = 0;
    function incrementCounter (){
        return counter ++;
    }
    return incrementCounter;
}

function createFunction(){
  function sayHello(){
    console.log('hello')
  }
  return sayHello;
}

function createFunctionPrinter(input){
  function printer(){
    console.log(input)
  }
  return printer
}

function addByX(x){
  function add(i){
    return i+x;
  }
  return add
}

function once(cb){
  let counter = 0, output = 1;
  function run(x){
    counter ++;
    return counter == 1 ? output = cb(x) : output;
  }
  return run
}

function after(r, cb){
  counter = 1
  function run(){
    (counter == r) ? cb() : counter++;
  }
  return run
}

function delay(cb, wait){
  function delay(...a){
    let caller = () => console.log(cb(...a));
    setTimeout(caller, wait);
  }
  return delay
}

function rollCall(names){
  index = 0;
  function callNames() {
    if(index <= names.length -1){
      console.log(names[index]);
    } else if(index == names.length){
      console.log("Everyone accounted for");
    }
    index ++;
  }
  return callNames
}

module.exports = outer, createFunction, createFunctionPrinter, addByX, once, after, delay, rollCall