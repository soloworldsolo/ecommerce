import {Component, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../Constants";
import {Product} from "../../../model/Product";


@Injectable()
export  class productService {
   productgeturl = Constants.API_ENDPOINT;

  constructor(private httpclent:HttpClient) {

  }

  getProductList() {
    return this.httpclent.get<Product[]>(this.productgeturl);
  }

}
