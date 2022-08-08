import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './model/book.model';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'bks-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any;
  bookService: BooksService;

  constructor(bookService: BooksService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
    this.books = this.bookService.getBooks().subscribe((data => {
      this.books = data;
    }))
  }

}
