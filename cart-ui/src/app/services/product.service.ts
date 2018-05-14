import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";

import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

    constructor(private _http: Http) {

    }

    getProducts(): any{
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var options = new RequestOptions({headers: headers});
        return this._http.get(environment.API_ROOT_PATH + '/api/products', options);
    }

    updateProduct(product: Product): any{
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var options = new RequestOptions({headers: headers});
        return this._http.put(environment.API_ROOT_PATH + '/api/products', product, options);
    }

}
