// TODO: write the validation functions

// non empty string with no whitespace and at least 3 characters.
function isValidName(string) {
  if (typeof(string) != "string" || string.length == 0) return false;
  let whitespace = string.match(/\s|\n/);
  return (string.length > 2 && whitespace === null);
}

function hoursAttended(attended, length){
  let numAttended = Number(attended);
  let numLength = Number(length);
  let types = ["string", 'number'];
  let allowed = (types.includes(typeof(attended)) && types.includes(typeof(length)));
  let bothNumerical = (typeof(numAttended) == "number" && typeof(numLength) == "number");
  let bothWhole = String(attended+length).match(/\./) == null && numAttended >= 0 && numLength >= 0;
  return (allowed && bothNumerical && bothWhole && numAttended <= numLength);
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
//console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
// console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);