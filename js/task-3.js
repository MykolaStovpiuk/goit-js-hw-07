class StringBuilder {
  constructor() {
    this.value = ".";
  }

  getValue() {
    return this.value;
  }

  padStart(char) {
    this.value = char + this.value;
  }

  padEnd(char) {
    this.value = this.value + char;
  }

  padBoth(char) {
    this.value = char + this.value + char;
  }
}

const builder = new StringBuilder();
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
