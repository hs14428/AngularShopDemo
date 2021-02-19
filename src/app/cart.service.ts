import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  // Appends product to array of items
  addToCart(product) {
    this.items.push(product);
  }
  // Collects items users add to cart and returns each item with associated quantity
  getItems() {
    return this.items;
  }
  // Returns empty array of items, which therefore empties cart
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
  constructor(private http: HttpClient) {}
}
