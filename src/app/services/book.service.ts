import { Injectable } from '@angular/core';
import BookModel from '../models/bookModel';
import { MainService } from './main-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public service: MainService;

  constructor() { }

  public async GetAllBooks(): Promise<BookModel[]> {
    return await this.service.HttpGet('/libros');
  }

  public async GetBook(id: number): Promise<BookModel> {
    return await this.service.HttpGet(`/libros/${id}`);
  }

  public async CreateBook(book: BookModel): Promise<BookModel>{
    return await this.service.HttpPost('/libros', book);
  }

  public async DeleteBook(id: number): Promise<{message: string}>{
    return await this.service.HttpDelete(`/libros/${id}`);
    console.log("mensaje");
  }

  public async UpdateBook(book: BookModel): Promise<BookModel> {
    return await this.service.HttpPut(`/libros/${book.id}`, book);
  }
  
}
