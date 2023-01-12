import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import BookModel from 'src/app/models/bookModel';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
  public formBook: FormGroup;
  public book: BookModel;
  
  constructor(private service: MainService, private router: Router, public fb: FormBuilder) {
    this.book = new BookModel;
    this.formBook = fb.group(
      {
        nombreLibro: ["", Validators.required],
        genero: ["", Validators.required],
        editorial: ["", Validators.required],
        anyo: ["", Validators.required],
        autor: ["", Validators.required],
        numeroCopias: ["", Validators.required]
      }
    )
  }

  get nombreLibro() {
    return this.formBook.get('nombreLibro');
  }
  get genero() {
    return this.formBook.get('genero');
  }
  get editorial() {
    return this.formBook.get('editorial');
  }
  get anyo() {
    return this.formBook.get('anyo');
  }
  get autor() {
    return this.formBook.get('autor');
  }
  get numeroCopias() {
    return this.formBook.get('numeroCopias');
  }

  async addBook(): Promise<void> {

    const { nombreLibro, genero, editorial, anyo, autor, numeroCopias} = this.formBook.value;
    if(!this.formBook.valid || !nombreLibro || !genero || !editorial || !anyo || !autor || !numeroCopias){
      return;
    }
    await this.service.book.CreateBook(this.formBook.value)
    this.router.navigate(["home"])
  }

}
