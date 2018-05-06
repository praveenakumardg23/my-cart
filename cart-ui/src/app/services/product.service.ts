import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";

import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

    constructor(private _http: Http) {

    }

    getProducts(): any{
        return this._http.get(environment.API_ROOT_PATH + '/api/products');
    }

    updateProduct(product: Product): any{
        return this._http.put(environment.API_ROOT_PATH + '/api/products', product);
    }

}
