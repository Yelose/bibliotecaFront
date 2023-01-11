import { Injectable } from '@angular/core';
import BookModel from '../models/bookModel';
import { MainService } from './main-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public service: MainService;

  public async GetAllBooks(): Promise<BookModel[]> {
    return await this.service.HttpGet('/libros');
  }
  constructor() { }
}
