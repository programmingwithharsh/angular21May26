import { Component } from '@angular/core';
import { Accordion } from "../accordion/accordion";
import { Modal } from "../modal/modal";
import { Star } from "../star/star";

@Component({
  selector: 'app-product-list',
  imports: [Accordion, Modal, Star],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {}
