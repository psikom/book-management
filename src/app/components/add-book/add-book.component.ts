import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
// used for add or update
export class AddBookComponent {
  // to hold the book details in update
  currentBook?: Book;

  constructor(private BookService: BookService,
    private route: ActivatedRoute, // to get the path params id
    private router: Router // to navigate
  ) {
    // get id of book for updates
    if (this.route.snapshot.params['id'])
      this.getBook(this.route.snapshot.params['id']);
  }

  // to save or update a book
  saveBook(data: any): void {
    if (this.currentBook) {
      this.BookService.update(this.currentBook.id, data);
    } else {
      this.BookService.create(data);
    }
    // Show a success message
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'saved!',
      showConfirmButton: false,
      timer: 1500,
      width: 250,
      heightAuto: true,
    })
  }

  // to get a book for update
  getBook(id: string): void {
    let book = this.BookService.get(id);
    if (book) {
      this.currentBook = book;
    } else {
      // in not existe
      this.router.navigate(['/']);
    }
  }
}
