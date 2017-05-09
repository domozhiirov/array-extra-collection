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


/* The main idea is that the anonymous function above is
 being invoked right after it has been defined.
 The benefit of self-invoking functions is that it enables
 you to execute code once without cluttering the global
 namespace (without declaring any globals). */
