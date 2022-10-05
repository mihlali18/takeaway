import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

export class Products{
  constructor(
    public title: String,
    public image: String,
    public price: Number

  ){}
}

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  products!: Products[];

  constructor(private homeService: HomeService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    // this.homeService.getProducts().subscribe(data =>
    //   this.products =data
    //   )
    this.httpClient.get<any>("http://localhost:2022/profolio/detail").subscribe(
      res => {
        this.products = res;
        console.log(this.products)
      }
    )
  }
}
