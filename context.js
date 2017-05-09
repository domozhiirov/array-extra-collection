var User = {
  count: 1,

  getCount: function () {
    return this.count;
  }
};

console.log(User.getCount());

var func = User.getCount.bind(User);

console.log(func.apply(User, null));
