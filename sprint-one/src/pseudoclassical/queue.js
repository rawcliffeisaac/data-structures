var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.nIndex = 1;
  this.oIndex = 1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nIndex] = value;
  this.nIndex++;
};

Queue.prototype.dequeue = function() {
  if (this.oIndex !== this.nIndex) {
    var mem = this.storage[this.oIndex];

    delete this.storage[this.oIndex];
    this.oIndex++;
    return mem;
  }
};

Queue.prototype.size = function() {
  return this.nIndex - this.oIndex;
};