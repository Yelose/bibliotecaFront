import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ReaderModel from 'src/app/models/readerModel';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-new-reader',
  templateUrl: './new-reader.component.html',
  styleUrls: ['./new-reader.component.scss']
})
export class NewReaderComponent {
  public formReader: FormGroup;
  public reader: ReaderModel;
  constructor(private service: MainService, private router: Router, public fb: FormBuilder) {
    this.reader = new ReaderModel;
    this.formReader = fb.group(
      {
        nombreLector: ["", Validators.required],
        telefono: ["", Validators.required],
        direccion: ["", Validators.required],
        nLibrosPrestados: ["", Validators.required],
      }
    )
  }

  get nombreLector() {
    return this.formReader.get('nombreLector');
  }
  get telefono() {
    return this.formReader.get('telefono');
  }
  get direccion() {
    return this.formReader.get('direccion');
  }
  get nLibrosPrestados() {
    return this.formReader.get('nLibrosPrestados');
  }

  async addReader(): Promise<void> {
    console.log("¿me oyes?")
    const { nombreLector, telefono, direccion, nLibrosPrestados} = this.formReader.value;
    console.log(this.formReader.value);
    if(!this.formReader.valid || !nombreLector || !telefono || !direccion || !nLibrosPrestados){
      return;
    }
    await this.service.reader.CreateReader(this.formReader.value)
    console.log(this.formReader.value);
    this.router.navigate(["home"])
  }
}
