var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    // create newly added node
    // if head is null then the tail.next should become the newly added node
    // point tail to new node
    let node = Node(value);

    if (list.head === null) {
      list.head = node;
      list.tail = node;
      return node;
    }

    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
    mem = list.head.value;
    if (list.head.next) {
      list.head = list.head.next;
    } else {
      list.head = null;
      list.tail = null;
    }
    return mem;
  };

  list.contains = function(target, obj) {
    let currentNode = obj || list.head;
    if (currentNode.value === target) {
      return true;
    }
    if (currentNode.next !== null) {
      return list.contains(target, currentNode.next);
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


