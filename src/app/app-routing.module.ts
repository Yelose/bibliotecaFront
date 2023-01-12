import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBookComponent } from './pages/details-book/details-book.component';
import { DetailsReaderComponent } from './pages/details-reader/details-reader.component';
import { HomeComponent } from './pages/home/home.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { NewReaderComponent } from './pages/new-reader/new-reader.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "new-book", component: NewBookComponent},
  {path: "new-reader", component: NewReaderComponent},
  {path: "book/:id", component: DetailsBookComponent},
  {path: "reader/:id", component: DetailsReaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
