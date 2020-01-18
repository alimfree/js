
describe("Closure", () => {
  const closures = require('./../src/closure');
  const sinon = require('sinon');

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
      stub = sinon.fake()
      work = closure.once(stub);
    });

    it("runs callback function once", () => {
      work();
      expect(stub.calledOnce);
    })
  });

  describe('after', () => {
    beforeEach(() => {
      hello = sinon.fake();
      runOnce = closure.after(3, hello);
    });

    it("executes callback after called first x times", () => {
      first = runOnce();
      second = runOnce();
      third = runOnce();
      expect(first).toEqual(undefined);
      expect(second).toEqual(undefined);
      expect(hello.calledOnce);
    });
  });
});