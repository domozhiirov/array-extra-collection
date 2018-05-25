func2(); // hoisted
func1(); // not hoisted

var func1 = function() {
	console.log('func1');
}

function func2() {
	console.log('func2');
}

//Initializations are Not Hoisted
//Only declarations are hoisted