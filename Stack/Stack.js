class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  checkLast() {
    //console.log(this.items[this.items.length - 1]);
    return this.items[this.items.length - 1];
  }

  pop() {
    return this.items.pop();
  }

  clear() {
    this.items = [];
  }

}
  export default Stack;

  