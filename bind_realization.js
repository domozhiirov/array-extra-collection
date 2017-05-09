Function.prototype.bind = function (context) {
  //closure
  var self = this;
  return function () {
    return self.apply(context, arguments);
  }
}

var User = {
  count: 1,

  getCount: function () {
    return this.count;
  }
}

var func = User.getCount.bind(User);

console.log(func());
