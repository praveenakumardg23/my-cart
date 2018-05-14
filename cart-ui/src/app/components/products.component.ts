import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { ProductService} from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: '../views/products.component.html',
  styleUrls: ['../styles/products.component.css']
})
export class ProductsComponent {
  
    @Input() products: Product[];

    @Output() productChange = new EventEmitter();

    constructor(private service: ProductService) {

    }

    addToCart(product: Product) {
        product.isInCart = true;
        this.service.updateProduct(product).subscribe(
            (response) => {
                this.productChange.emit();
            },
            (err) => {
                alert('Product not removed from cart');;
            }
        );
    }
}
