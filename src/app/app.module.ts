import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewBookComponent,
    NewReaderComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
