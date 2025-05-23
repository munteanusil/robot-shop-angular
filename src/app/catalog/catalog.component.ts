import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
      product:IProduct;

      constructor(){
        this.product ={
          id:2,
          description:
          " A frendly robot head with two eyes and a smile -- great for domestic use.",
          name: "Frendly Bot",
          imageName:"head-friendly.png",
          category:"Headers",
          price:945.0,
          discount:0.2,
        };
      }
}
