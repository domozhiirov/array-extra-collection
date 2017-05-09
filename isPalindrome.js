var isPalindrome = function (str) {
  var temp = str.replace(/ /g, '').toLocaleLowerCase();

  return (temp.split('').reverse().join('') == temp);
}

console.log(isPalindrome('_nurses run_'));
console.log(isPalindrome('_raceCar_'));
console.log(isPalindrome('race      Car'));
console.log(isPalindrome('race car'));
console.log(isPalindrome('dasdasdadsafg'));
