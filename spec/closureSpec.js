describe("Closure", () => {
  describe("Outer", () => {
    const Outer = require('../closure.js ');

    beforeEach( () =>{
      incrementFunc = Outer();
    });

    it("returns 0 when called for the first time", () => {
      // return var ++; pre increment the value is returned before modification
      incrementFunc();
      expect(incrementFunction).toEqual(0);
    })

    it("returns 1 when called twice", () => {
      incrementFunc();
      incrementFunc();
      expect(incrementFunction).toEqual(1);
    })
  })
}