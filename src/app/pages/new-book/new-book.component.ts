import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import BookModel from 'src/app/models/bookModel';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  public formBook: FormGroup;
  public book: BookModel;
  
  constructor(private service: MainService, private router: Router, public fb: FormBuilder, private route: ActivatedRoute) {
    this.book = new BookModel;
    this.book.id = 0;
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

  async saveBook(): Promise<void>{
    const { nombreLibro, genero, editorial, anyo, autor, numeroCopias} = this.formBook.value;
    if(!this.formBook.valid || !nombreLibro || !genero || !editorial || !anyo || !autor || !numeroCopias){
      return;
    }
    if (this.book.id === 0){
      await this.service.book.CreateBook(this.formBook.value)
    } else {
      await this.service.book.UpdateBook(this.formBook.value)
    }
    this.router.navigate(["home"])
  }
  async ngOnInit(): Promise<void> {
    let id = this.route.snapshot.params['id'];
    console.log(id)
    if (id !=0) {
      this.book = await this.service.book.GetBook(id);
    }
  }
}
