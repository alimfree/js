describe("Closure", () => {
  const closures = require('../src/closure');
  const jasmin = require('jasmine');
  beforeEach( () =>{
    closure = new closures();
  });

  describe("Outer", () => {
    beforeEach( () =>{
      counter = closure.counter();
    });

    it("returns 0 when called for the first time", () => {
      // return var++; pre increment (prefix) the original value is returned before addition applied
      // return ++var; post increment (postfix) the addition is applied and then returned
      let result = counter();
      expect(result).toEqual(0);
    })

    it("returns 1 when called twice", () => {
      counter();
      let result = counter();
      expect(result).toEqual(1);
    })
  });

  describe("sayHello", () => {
    it("prints hello", () => {
      spyOn(console, 'log');
      greeting = closure.sayHello();
      greeting();
      expect(console.log).toHaveBeenCalledWith('hello')
    })
  });

  describe( 'printer', () => {
    it("prints given a string", () => {
      spyOn(console, 'log');
      goodby = closure.printer('goodby');
      goodby();
      expect(console.log).toHaveBeenCalledWith('goodby')
    });
  });

  describe("addByX", () => {
    it("increases given number by a predetermined amount", () => {
      addBy2 = closure.addByX(2);
      expect(addBy2(4)).toEqual(6);
      expect(addBy2(8)).toEqual(10);
    });
  });

  describe("once", () => {
    beforeEach(() => {
      stub = { addBy2: closure.addByX(2) }
      work = closure.once(stub.addBy2);
      spyOn(stub, 'addBy2')
    })

    it("runs callback function once", () => {
      //console.log(stub.addBy2(4))
      work(2);
      expect(stub.addBy2).toHaveBeenCalledWith(2)
      expect(stub.addBy2.calls.count()).toBe(1);
    })
  });
});