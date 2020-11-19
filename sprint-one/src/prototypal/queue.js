var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.nIndex = 1;
  someInstance.oIndex = 1;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.nIndex] = value;
    this.nIndex++;

  },
  dequeue: function() {
    if (this.oIndex !== this.nIndex) {
      var mem = this.storage[this.oIndex];

      delete this.storage[this.oIndex];
      this.oIndex++;
      return mem;
    }
  },
  size: function() {
    return this.nIndex - this.oIndex;
  }
};