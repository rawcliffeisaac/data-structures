class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.nIndex = 1;
    this.oIndex = 1;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.nIndex] = value;
    this.nIndex++;
  }

  dequeue() {
    if (this.oIndex !== this.nIndex) {
      let mem = this.storage[this.oIndex];
      delete this.storage[this.oIndex];
      this.oIndex++;
      return mem;
    }
  }

  size() {
    return this.nIndex - this.oIndex;
  }
}
