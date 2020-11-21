// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

//{storage: {[value]: {value: value, edges: {}} [edges]}
//
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {value: node, edges: {}};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this.storage[node].edges) {
    this.removeEdge(node, this.storage[node].edges[key]);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] === undefined || this.storage[toNode] === undefined) {
    return false;
  }
  let fromNodeHas = this.storage[fromNode].edges[toNode] !== undefined;
  let toNodeHas = this.storage[toNode].edges[fromNode] !== undefined;
  return (fromNodeHas && toNodeHas);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode].edges[toNode] = toNode;
    this.storage[toNode].edges[fromNode] = fromNode;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.storage) {
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


