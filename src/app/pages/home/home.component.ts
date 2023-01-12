import { Component, OnInit } from '@angular/core';
import BookModel from 'src/app/models/bookModel';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public books: BookModel[];
  public displayedColumns: string[] = ["nombreLibro", "genero", "editorial", "anyo", "autor", "numeroCopias"]
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  constructor(private service: MainService){
    this.books = [];
  }

  async ngOnInit(): Promise<void> {
    this.books = await this.service.book.GetAllBooks();
  }


}
