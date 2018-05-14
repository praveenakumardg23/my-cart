import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../models/product';
import { ProductService} from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-cart',
  templateUrl: '../views/navigation-cart.component.html',
  styleUrls: ['../styles/navigation-cart.component.css']
})
export class NavigationCartComponent implements OnChanges {
  
    @Input() products: Product[];

    @Output() productChange = new EventEmitter();

    cartCount: number;

    constructor(private service: ProductService) {
        
    }

    ngOnChanges() {
        this.cartCount = 0;
        this.products.forEach((product) => {
            if (product.isInCart) {
                this.cartCount = this.cartCount + 1;
            }
        });
    }

    removeFromCart(product: Product) {
        product.isInCart = false;
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
