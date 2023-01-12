import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import BookModel from 'src/app/models/bookModel';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: BookModel[];
  public displayedColumns: string[] = ["nombreLibro", "genero", "editorial", "anyo", "autor", "numeroCopias"]
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  constructor(private service: MainService, private router: Router){
    this.books = [];
  }

  async ngOnInit(): Promise<void> {
    this.books = await this.service.book.GetAllBooks();
  }

  async edit(id: number): Promise<void> {
    this.router.navigate([`/book/${id}`]);
  }

  async delete(id: number): Promise<void> {
    await this.service.book.DeleteBook(id);
    await this.reload();
  }

  async reload(): Promise<void> {
    this.books = await this.service.book.GetAllBooks();
  }
}
