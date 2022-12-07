class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
    this._products = {};
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error("Not enough space in the warehouse.");
    }
    if (!this._products.hasOwnProperty(product)) {
      this._products[product] = {
        quantity: Number(quantity),
        spaceRequired: Number(spaceRequired),
      };
      this.warehouseSpace -= spaceRequired;

      this.products.push({
        product: product,
        quantity: Number(quantity),
        spaceRequired: Number(spaceRequired),
      });
      return `The ${product} has been successfully delivered in the warehouse.`;
    }
  }
  quantityCheck(product, minimalQuantity) {
    minimalQuantity = Number(minimalQuantity);
    let difference = 0;
    if (!this._products.hasOwnProperty(product)) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }
    if (minimalQuantity <= this._products[product].quantity) {
      return `You have enough from product ${product}.`;
    } else {
      this._products[product].quantity = minimalQuantity;
      this.products.forEach((obj) => {
        if (obj.product == product) {
          difference = minimalQuantity - obj.quantity;
          obj.quantity = minimalQuantity;
        }
      });
      return `You added ${difference} more from the ${product} products.`;
    }
  }
  sellProduct(product) {
    if (!this._products.hasOwnProperty(product)) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    this._products[product].quantity -= 1;
    this.products.forEach((obj) => {
      if (obj.product == product) {
        obj.quantity -= 1;
      }
    });
    this.sales.push({ product: product, quantity: 1 });
    return `The ${product} has been successfully sold.`;
  }
  revision() {
    let output = ``;
    if (this.sales.length == 0) {
      throw new Error("There are no sales today!");
    } else {
      output = `You sold ${this.sales.length} products today
Products in the warehouse:
`;

      for (let prod of this.products) {
        output += `${prod.product}-${prod.quantity} more left
`;
      }
    }
    return output;
  }
}
const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));
console.log(myOnlineShop.quantityCheck("TV", 40));
