//FIBONACCI
var fib0 = function(n){
  return n <= 1 ? 1 :
  arguments.callee.call(this, n - 1) +
  arguments.callee.call(this, n - 2);
};

res = fib0(10);
console.log(res);




// LONG EXAMPLE ONE
var transactions = "P 130.56, C, P 12.37 , P 6.00, R 75.53, P 1.32";

var res = transactions
// Break the string into an array on commas
  .split(",")
  // Keep just the purchase transactions ('P')
  .filter(function(s) { return s.trim()[0] === 'P' })
  // Get the price associated with the purchase
  .map   (function(s) { return Number(s.trim().substring(1).trim()) })
  // Sum up the quantities of purchases
  .reduce(function(acc, v) { return acc + v; });
console.log(res);



//ES5 built in functions
res = ["1", "2", "3", "4"].map(parseFloat); //returns [1, 2, 3, 4]
console.log(res);


res = ["yes", 0, "no", "", "true", "false"].filter(Boolean); //returns ["yes", "no", "true", "false"]
console.log(res); //returns [1, 2, 3, 4]




// PROTOTYPE FUNCTIONS
res = [1, 2, 3].map(function(elem, index, arr){
  return elem * elem;
});
console.log(res); //returns [1, 4, 9]


res = [1, 2, 3, 4, 5].filter(function(elem, index, arr){
  return elem % 2 === 0;
});
console.log(res); //returns [2, 4]


res = [1, 2, 3, 4, 5].some(function(elem, index, arr){
  return elem >= 3;
});
console.log(res); //returns true


res = [1, 2, 3, 4, 5].every(function(elem, index, arr){
  return elem >= 3;
});
console.log(res); //returns false




//SIMPLE REDUCERS
[1, 2, 3, 4, 5].reduce(function(sum, elem, index, arr){
  return sum + elem;
});
console.log(res); //returns 15

[1, 2, 3, 4, 5].reduce(function(sum, elem, index, arr){
  return sum + elem;
}, 10);
console.log(res); //returns 25. 10 is an initial value




//REDUCERS
arr = [1, 2, 4, 5, 3];

res = arr.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(res); //maximum the simplest way


res = Math.max.apply(null, arr);
console.log(res); //maximum more advanced way

// res = Math.max(…arr); //way of ES6
// ["foo", ...["bar", "baz"]] another example of this



//ARRAY OF RANDOM NUMBERS
res = Array.apply(null, new Array(5)).map(Math.random);
console.log(res);



//FILTER BY REGEX
res = ["foo", "bar", "baz"].filter(RegExp.prototype.test, /^b/);
console.log(res);



// MAP ON MAP example
res = [
  function(a) { return a * a; },
  function(b) { return b * b * b; }
]
  .map(Array.prototype.map, [1, 2, 3]);
console.log(res); //returns [[1, 4, 9], [1, 8, 27]]



//ON EACH ELEMENT OF ARRAY APPLY SOMETHING
res = ["  foo ", "\n\tbar", "\r\nbaz\t "].map(Function.prototype.call, String.prototype.trim);
console.log(res); //returns ["foo", "bar", "baz"]

res = [true, 0, null, []].map(Function.prototype.call, Object.prototype.toString);
console.log(res); //returns ["[object Boolean]", "[object Number]", "[object Null]", "[object Array]"]


//SIMPLE FOR EACH
[1, 2 ,3, 4].forEach(console.log);



//JOIN
var map = Array.prototype.map;
var hello = map.call("hello world", function (char) {
  return char + "*";
});

console.log((hello.join(""))); // "h*e*l*l*o* *w*o*r*l*d*"





// Compare two object. The order of fields is important
obj1 = {a: 1, b: 2};
obj2 = {a: 1, b: 2};
res = ( JSON.stringify(obj1) === JSON.stringify(obj2) );
console.log(res);


// To duplicate array
Array.prototype.duplicate = function() {
  return this.slice(0);
};

var arr1 = ['a','b','c'];
var arr2 = arr1.duplicate();
arr1[0] = 3; // change something in first

console.log(arr1);
console.log(arr2);





//INSTANCEOF VS TYPEOF


//instanceof will not work for primitives eg "foo" instanceof String will return false whereas typeof "foo" == "string" will return true.

var color1 = new String("green");
res = (color1 instanceof String); // returns true
console.log(res);

var color2 = "coral"; //no type specified
res = (color2 instanceof String); // returns false (color2 is not a String object)
console.log(res);


res = (typeof 'example string' == 'string'); // false
console.log(res);


/*

 JavaScript has six basic data types - Undefined (indicating value not exist), Null, Boolean (boolean), String (string), Number (number) and Object (object).
 The first 5 are primitive data types, and the Object - not. In addition Object has "sub-types": an array (Array), function (Function), a regular expression (RegExp),
  +5 primitives objects mirrors and others.

 */

/*

var vs without

Property can be removed using delete.
In case without it VariableEnvironment is attached to the global object (often window) so it can be removed using delete.

 */


//HOISTING
function test() {
  a = 5;
  var a = 10;
  console.log(a); // will be 10
}
test();

/*

 Scope-Safe Constructors

 Since a constructor is just a function, it can be called without the new keyword, but this leads to unexpected results and errors especially for inexperienced programmers.

 */
function Book(name) {
  if (!(this instanceof Book)) {

    // the constructor was called without "new".
    return new Book(name);
  }
}



/*

Using super in ES5

 */
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};




