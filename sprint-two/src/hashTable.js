

var HashTable = function() {
  this.limit = 8;
  this.count = 0;
  this.storage = LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  this.count++;
  if ((this.count / this.limit) >= .75) {
    this.rehash(this.limit * 2);
  }
  var index = getIndexBelowMaxForKey(k, this.limit);
  let newTuple = [k, v];
  if (this.storage[index] === undefined) {
    this.storage[index] = newTuple;
  } else {
    if (Array.isArray(this.storage[index][0])) {
      this.storage[index].push(newTuple);
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === k) {
          this.storage[index][i][1] = v;
        }
      }
    } else {
      if (this.storage[index][0] === k) {
        this.storage[index][1] = v;
      } else {
        let oldTuple = this.storage[index];
        let newBucket = [oldTuple, newTuple];
        this.storage[index] = newBucket;
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this.limit);
  if (this.storage[index] === undefined) {
    return;
  }
  if (this.storage[index][0] === k) {
    return this.storage[index][1];
  } else {
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === k) {
        return this.storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  //remove the value
  var index = getIndexBelowMaxForKey(k, this.limit);
  console.log(this.storage);
  if (this.storage[index][0] === k) {
    this.storage[index] = undefined;
  } else {
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === k) {
        this.storage[index].splice(i, 1);
        break;
      }
    }
    if (this.storage[index][1] === undefined) {
      this.storage[index] = this.storage[index][0];
    }
  }

  //decrease count
  this.count--;

  //rehash if necessary
  if (((this.count / this.limit) <= .25) && (this.limit > 8)) {
    this.rehash(this.limit / 2);
  }
};

//we designated this vv
// HashTable.prototype.rehash = function(newSize) {
//   this.limit = newSize;
//   newStorage = [];
//   debugger;
//   for (let key in this.storage) {
//     if (typeof this.storage[key][0] === 'string') {
//       newStorage.push(this.storage[key]);
//     } else {
//       for (let i = 0; i < this.storage[key].length; i++) {
//         newStorage.push(this.storage[key][i]);
//       }
//     }
//   }
//   this.storage = LimitedArray(this.limit);

//   for (let j = 0; j < newStorage.length; j++) {
//     this.insert(newStorage[j][0], newStorage[j][1]);
//   }
// };



  // need method of keeping track of empty buckets?
  // if storage length is less than 25 but greter than 8, rehash by half


  // if storage length is more than 25, rehash by doubling


/*
 * Complexity: What is the time complexity of the above functions?
 */


// for (let i = 0; i < this.storage.length; i++) {
//   debugger;
//   if (this.storage[i] !== null) {
//     if (typeof this.storage[i][0] === 'string') {
//       newStorage.insert(this.storage[i][0], this.storage[i][1]);
//     } else {
//       for (let j = 0; j < this.storage[i].length; j++) {
//         newStorage.insert(this.storage[i][j][0], this.storage[i][j][1]);
//       }
//     }
//   }
// }



