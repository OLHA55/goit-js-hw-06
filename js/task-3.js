class StringBuilder {
  #value
  constructor({ value }) {
    this.#value = value;
  }
  
  getValue() {
    return this.#value;
  }

  padStart(newValue) {
    this.#value = newValue + this.#value;
  }

  padEnd(newValue) {
    this.#value = this.#value + newValue;
  }

  padBoth(newValue) {
    this.#value = newValue + this.#value + newValue;
  }
}

const builder = new StringBuilder({ value: "." });

console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue());





// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="