var binarySearch = function(a, x) {
	var length = a.length;
	if (length === 0) {
		return false;
	} else {
		var m = Math.floor(length/2);
		var y = a[m];
		if (x === y) {
			return true;
		} else if (x < y) {
			return binarySearch(a.slice(0, m), x);
		} else {
			return binarySearch(a.slice(m + 1), x);
		}
	}
}

var result = binarySearch([0, 0, 1 ,1, 2, 3, 5, 6, 11], 2);
console.log(result);
