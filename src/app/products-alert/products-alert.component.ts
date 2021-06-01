import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products-alert',
  templateUrl: './products-alert.component.html',
  styleUrls: ['./products-alert.component.css']
})
export class ProductsAlertComponent implements OnInit {
  @Input() product!: Product|undefined; // This property will hold info passed from the parent component
  @Output() notify = new EventEmitter(); // this property will share information with the parent component

  constructor() { }

  ngOnInit() {
  }

}