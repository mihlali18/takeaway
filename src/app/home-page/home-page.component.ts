import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
   
  constructor( private homeService: HomeService ) { }
  data = []
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.homeService.getProducts().subscribe(results => this.data = results)
  }
}
