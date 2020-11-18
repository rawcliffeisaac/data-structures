var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Keep track of the size of the stack
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
      let mem = storage[size];
      delete storage[size];
      return mem;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
