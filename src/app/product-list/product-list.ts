import { Component } from '@angular/core';
import { Accordion } from "../accordion/accordion";
import { Modal } from "../modal/modal";

@Component({
  selector: 'app-product-list',
  imports: [Accordion, Modal],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {}
