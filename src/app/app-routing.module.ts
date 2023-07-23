import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'Books', pathMatch: 'full' },
  { path: 'Books', component: BooksListComponent },
  // Route to update a book
  { path: 'Books/update/:id', component: AddBookComponent },
  // Route to add a book
  { path: 'Books/add', component: AddBookComponent },
  // For any auther routes
  { path: '**', redirectTo: 'Books' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
