var test1 = (function () {
  var n = 0;

  return function () {
    n++;
    return n;
  };
})();

console.log(test1());
console.log(test1());
console.log(test1());
