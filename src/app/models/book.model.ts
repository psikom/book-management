export class Book {
  // Properties of the Book
  public id: number;
  public title: string;
  public author: string;
  public editor: string;
  public year: number;
  public image: string;

  // Constructor for new book
  constructor(book?: any) {
    this.id = book?.id ?? Math.floor(Math.random() * 100);
    this.title = book?.title ?? '';
    this.author = book?.author ?? '';
    this.editor = book?.editor ?? '';
    this.year = book?.year ?? 2023;
    this.image = book?.image ?? '';

  }
}
