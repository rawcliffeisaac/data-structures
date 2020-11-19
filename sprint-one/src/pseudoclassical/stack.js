var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newsize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.newsize] = value;
  this.newsize++;
};

Stack.prototype.pop = function() {
  if (this.newsize > 0) {
    this.newsize--;
    let mem = this.storage[this.newsize];
    delete this.storage[this.newsize];
    return mem;
  }
};

Stack.prototype.size = function() {
  return this.newsize;
};