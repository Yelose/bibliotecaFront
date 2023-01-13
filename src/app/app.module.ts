import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//formulario reactivo ngModel
import { ReactiveFormsModule} from '@angular/forms';

// componentes de Angular Material: están en modules/material

//Este hace que te puedas comunicar con HTTP, sin esto, no funciona el main service.
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { NewReaderComponent } from './pages/new-reader/new-reader.component';
import { MaterialModule } from './modules/material/material.module';
import { BooksComponent } from './pages/home/books/books.component';
import { ReadersComponent } from './pages/home/readers/readers.component';
import { DetailsBookComponent } from './pages/details-book/details-book.component';
import { DetailsReaderComponent } from './pages/details-reader/details-reader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewBookComponent,
    NewReaderComponent,
    BooksComponent,
    ReadersComponent,
    DetailsBookComponent,
    DetailsReaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
