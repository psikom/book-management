import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent {

  // array of books
  Books?: Book[];

  // Constructor, injecting the BookService
  constructor(private BookService: BookService) { }

  // Lifecycle hook
  ngOnInit(): void {
    // Get all books
    this.Books = this.BookService.getAll();
  }

  // to delete a book
  delete(Book: Book): void {
    // Show a confirmation dialo
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.BookService.delete(Book);
        Swal.fire(
          {
            icon: 'success',
            title: 'Your Book has been deleted!',
            showConfirmButton: false,
            timer: 1500,
          }
        )
      }
    })
  }

  // to search books by title
  searchTitle(event: any): void {
    if (event) {
      this.Books = this.BookService.findByTitle(event);
    } else {
      // if empty searsh get all books
      this.Books = this.BookService.getAll();
    }
  }
}
