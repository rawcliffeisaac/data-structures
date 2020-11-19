var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(stackMethods);
  someInstance.newsize = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

var stackMethods = {
  push: function(value) {
    this.storage[this.newsize] = value;
    this.newsize++;
  },
  pop: function() {
    if (this.newsize > 0) {
      this.newsize--;
      let mem = this.storage[this.newsize];
      delete this.storage[this.newsize];
      return mem;
    }
  },
  size: function() {
    return this.newsize;
  }
};
