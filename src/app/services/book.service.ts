import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';


@Injectable({
  providedIn: 'root',
})
export class BookService {

  // default array
  private books: Book[] = [
    new Book({
      id: 1,
      title: 'title1',
      author: 'author1',
      editor: 'editor1',
      year: 2000,
      image: 'alfLila.webp',
    }),
    new Book({
      id: 2,
      title: 'title2',
      author: 'author2',
      editor: 'editor2',
      year: 2000,
      image: 'rich.jpeg',
    }),
    new Book({
      id: 3,
      title: 'title3',
      author: 'author3',
      editor: 'editor3',
      year: 2000,
      image: 'great.jpg',
    })
  ];

  constructor() { }

  // To get all books
  getAll(): Book[] {
    return this.books;
  }

  // to get book by id (for update)
  get(id: any): Book | undefined {
    return this.books.find(book => book.id == id);
  }

  //to create a new book
  create(book: any) {
    this.books.push(new Book(book));
  }

  //to update a book
  update(id: any, data: any) {
    let book = this.get(id);
    if (book) {
      let i = this.books.indexOf(book);
      this.books[i] = data;
    }
  }

  //to delete a book
  delete(book: Book) {
    let i = this.books.indexOf(book);
    this.books.splice(i, 1);
  }

  //for searsh
  findByTitle(title: any): Book[] {
    return this.books.filter(book => book.title.includes(title));
  }
}
