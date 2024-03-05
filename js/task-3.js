'use strict';
class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  get value() {
    return this.value;
  }

  append(str) {
    this.value.push(str);
  }

  prepend(str) {
    this.value.unshift(str);
  }
  // додає елемент на поч і в кін
  pad(str){
    this.value.unshift(str);
  }
}

const builder = new StringBuilder('.');

// const value = builder.value();
// console.log(this.value);

builder.append('^');
console.log(builder.value); // '.^'


builder.prepend('^');
console.log(builder.value); // '^.^







?




// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="