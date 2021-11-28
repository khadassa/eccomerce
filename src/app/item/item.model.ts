export class Item {
  name: string;
  quantity: number;
  price: number;
  image: string;

  constructor(name: string, quantity: number, price: number, image: string) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
  }
}
