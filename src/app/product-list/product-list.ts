import { Component } from '@angular/core';
import { Accordion } from "../accordion/accordion";
import { Modal } from "../modal/modal";
import { Star } from "../star/star";
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [Accordion, Modal, Star, LowerCasePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  productTitle: string = "Dashboard Title"; // property
}
