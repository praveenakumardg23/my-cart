import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent} from './components/layout.component';
import { NavigationCartComponent} from './components/navigation-cart.component';
import { ProductsComponent} from './components/products.component';

import { ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationCartComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
