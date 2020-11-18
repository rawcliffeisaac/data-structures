var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Keep track of newest and oldest indexes
  let oIndex = 1;
  let nIndex = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[nIndex] = value;
    nIndex++;
  };

  someInstance.dequeue = function() {
    if (oIndex !== nIndex) {
      mem = storage[oIndex];
      delete storage[oIndex];
      oIndex++;
      return mem;
    }
  };

  someInstance.size = function() {
    return nIndex - oIndex;
  };

  return someInstance;
};
