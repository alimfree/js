// closure homework from frontendmasters course
// js the hard parts by Will Sentence
function closures() {
  this.counter = () => {
    let counter = 0;
    return () => counter ++;
  };

  this.sayHello = () => {
    return () => console.log('hello')
  };

  this.printer = (input) => {
    return () => console.log(input)
  };

  this.addByX = (x) => {
    return (i) => i+x;
  };

  this.once = (cb) => {
    let counter = 0, output = 1;
    return (x) => {
      counter ++;
      return counter == 1 ? output = cb(x) : output;
    }
  };

  this.after = (r, cb) => {
    counter = 1;
    return () => (counter == r) ? cb() : counter++;
  };

  this.delay = (cb, wait) => {
    return (...a) => {
      let caller = () => console.log(cb(...a));
      setTimeout(caller, wait);
    }
  };

  this.rollCall = (names) => {
    let index = 0;
    return () => {
      if(index <= names.length -1){
        console.log(names[index]);
      } else if(index == names.length){
        console.log("Everyone accounted for");
      }
      index ++;
    }
  };
}

module.exports = closures;