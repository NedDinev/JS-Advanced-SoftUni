function classHierarchy() {
  class Figure {
    constructor() {
      this.units = "cm";
    }
    get area() {}
    changeUnits(n) {
      this.units = n;
    }
    toString() {
      return `Figures units: ${this.units}`;
    }

    units(v) {
      const unit = {
        m: (val) => val / 10,
        mm: (val) => val * 10,
        cm: (val) => val,
      };
      return unit[this.units](v);
    }
  }

  class Circle extends Figure {
    constructor(r) {
      super();
      this._r = r;
    }
    get area() {
      this.r = super.units(this._r);
      return Math.PI * this.r * this.r;
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.r}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super();
      this._width = width;
      this._height = height;
      this.units = units;
    }
    get area() {
      this.width = super.units(this._width);
      this.height = super.units(this._height);
      return this.width * this.height;
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

