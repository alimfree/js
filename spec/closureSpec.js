describe("Closure", () => {
  const closures = require('../src/closure');

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
  })

  describe("sayHello", () =>{
    beforeEach(() => {
      sayHello = closure.sayHello();
    })

    xit("prints hello", () => {
      console.log = Jasmine.createSpy("log")
      expect(console.log).toHaveBeenCalledWith(sayHello)
    })
  })
});