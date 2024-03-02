
class StringBuilder {
    constructor(value) {
      this.value = value;
    }

    get val() {
      return this.value;
    }

    set val(value) {
      this.value = value;
    }

    append(str) {
      this.value += str;
    }

    prepend(str) {
      this.value = str + this.value;
    }
    // додає елемент на поч і в кін
    pad(str) {
      this.value = str + this.value + str;
    }
  }







const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="