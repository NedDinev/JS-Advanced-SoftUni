(function solve() {
  String.prototype.ensureStart = function (strInput) {
    let result = "";
    if (this.startsWith(strInput)) {
      result += this;
      return result;
    } else {
      result = strInput + this;
      return result;
    }
  };
  String.prototype.ensureEnd = function (strInput) {
    let result = "";
    if (this.endsWith(strInput)) {
      result += this;
      return result;
    } else {
      result = this + strInput;
      return result;
    }
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    let result = "";
    if (n < 4) {
      result = ".".repeat(n);
      return result;
    }
    if (this.length <= n) {
      result += this;
    } else if (this.length >= n) {
      let spaceIndex = this.substring(0, n - 2).lastIndexOf(" ");
      if (spaceIndex === -1) {
        return this.substring(0, n - 3) + "...";
      }
      return this.substring(0, spaceIndex) + "...";
    }

    return result;
  };

  String.format = function (strInput, ...words) {
    let i = 0;

    while (words[i] != undefined) {
      strInput = strInput.replace(`{${i}}`, words[i]);

      i++;
    }

    return strInput;
  };
})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format("The {0} {1} fox", "quick", "brown");
str = String.format("jumps {0} {1}", "dog");
