import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { ProductService} from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-cart',
  templateUrl: '../views/navigation-cart.component.html',
  styleUrls: ['../styles/navigation-cart.component.css']
})
export class NavigationCartComponent {
  
    @Input() products: Product[];

    @Output() productChange = new EventEmitter<Product>();

    constructor(private service: ProductService) {

    }

    removeFromCart(product: Product) {
        product.isInCart = false;
        this.service.updateProduct(product).subscribe(
            (response) => {
                this.productChange.emit(product);
            },
            (err) => {
                alert('Product not removed from cart');;
            }
        );
    }
}
