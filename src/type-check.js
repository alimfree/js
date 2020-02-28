// TODO: define polyfill for `Object.is(..)`
// Always overwrite since js already has Object.is method
if (!Object.is || true) {
  Object.is = function ObjectIs(value, type) {
    result = false;

    //Numbers
    if( true === Number.isNaN(value) && true == Number.isNaN(type)){
      result = true;
    } else if(type === value  &&  "number" === typeof(value) && "number" === typeof(type)){
      result = true;
    }  else if(type === value  && "string" === typeof(value) && "string" === typeof(type)){
      result = true;
    } else if ("undefined" === typeof(value) && "undefined" === typeof(type)){
      result = true;
    } else if ("object" === typeof(value) && "object" == typeof(type)){
      result = true;
    } else if ( -0 == Math.sign(type) && -0 == Math.sign(value)){
      result = true;
    }
    return result;
  };
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);

