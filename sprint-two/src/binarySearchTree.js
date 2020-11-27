var BinarySearchTree = function(value) {

  var instance = Object.create (bstMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

//{value: 5, left: {value: 3, left: null, right: null}, right: null}
//{value: 1, left: null, right: null}

var bstMethods = {
  insert: function(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
        return;
      } else {
        this.left.insert(value);
        return;
      }
    } else {
      if (value > this.value) {
        if (this.right === null) {
          this.right = BinarySearchTree(value);
          return;
        } else {
          this.right.insert(value);
          return;
        }
      }
    }
  },

  contains: function(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  },

  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }
};
// {value: 8, left: null, right:null}

// {value: 7, left: null, right:null}

//
/*
 * Complexity: What is the time complexity of the above functions?
 */

var newNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};//
/*
 * Complexity: What is the time complexity of the above functions?
 */
