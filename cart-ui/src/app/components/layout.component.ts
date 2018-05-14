import { Component } from '@angular/core';
import { ProductService} from '../services/product.service';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Component({
  selector: 'app-layout',
  templateUrl: '../views/layout.component.html',
  styleUrls: ['../styles/layout.component.css']
})
export class LayoutComponent {
    products: Product[];
  
    constructor(private service: ProductService) {
        this.products = [];
        this.getProducts();
    }

    getProducts() {
        this.service.getProducts().subscribe(
            (response) => {
                this.products = response.json().products;
            },
            (error) => {
                alert('Get Products Failed');
            }
        );
    }
}
