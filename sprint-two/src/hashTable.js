

var HashTable = function() {
  this.limit = 8;
  this.count = 0;
  this.storage = LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  this.count++;
  if ((this.count / this.limit) >= .75) {
    this.rehash();
  }
  var index = getIndexBelowMaxForKey(k, this.limit);
  let newTuple = [k, v];
  if (this.storage[index] === undefined) {
    this.storage[index] = newTuple;
  } else {
    if (Array.isArray(this.storage[index][0])) {
      this.storage[index].push(newTuple);
    } else {
      let oldTuple = this.storage[index];
      let newBucket = [oldTuple, newTuple];
      this.storage[index] = newBucket;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  if (this.storage[index][0] === k) {
    this.storage[index] = undefined;
  } else {
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === k) {
        this.storage[index].splice(i, 1);
        break;
      }
    }
  }
  this.count--;
  if ((this.count / this.limit) <= .25) {
    this.rehash;
  }
};

//we designated this vv
HashTable.prototype.rehash = function() {
  // need method of keeping track of empty buckets?
  // if storage length is less than 25 but greter than 8, rehash by half

  // if storage length is more than 25, rehash by doubling
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


