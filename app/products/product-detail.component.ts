import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from './product'

import {ProductService} from './product.service'

@Component({
templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle:string='Product Detail'
    products:IProduct[];
    product:IProduct;
    errorMessage:any;
    constructor(private _route:ActivatedRoute, 
                private _router:Router, private _productService:ProductService){

    }
    ngOnInit(): void{
        let id=+this._route.snapshot.params['id'];
        this.pageTitle +=`: ${id}`;
        //this.product=
        this._productService.getProducts().subscribe(products => this.products =products,
       error => this.errorMessage=<any> error);
       console.log(this.products+"****"+this.product);
    }
    onBack(): void{
        this._router.navigate(['/products']);
    }

}