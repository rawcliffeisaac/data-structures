class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.newsize = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.newsize] = value;
    this.newsize++;
  }

  pop() {
    if (this.newsize > 0) {
      this.newsize--;
      let mem = this.storage[this.newsize];
      delete this.storage[this.newsize];
      return mem;
    }
  }

  size() {
    return this.newsize;
  }
}