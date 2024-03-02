
class StringBuilder {
    constructor(value) {
      this.value = value;
    }

    getval() {
      return this.value;
    }

    setval(value) {
      this.value = value;
      return builder.value();
    }

    append(str) {
      this.value += str;
      return builder.padStart("^");
    }

    prepend(str) {
      this.value = str + this.value;
      return builder.padEnd("^");
    }
    // додає елемент на поч і в кін
    pad(str) {
      this.value = str + this.value + str;
      return builder.padBoth("=");
    }
  }


const builder = new StringBuilder(".");
console.log(builder.value); // "."
builder.padStart;
console.log(builder.value); // "^."
builder.padEnd;
console.log(builder.value); // "^.^"
builder.padBoth;
console.log(builder.value); // "=^.^="





// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="