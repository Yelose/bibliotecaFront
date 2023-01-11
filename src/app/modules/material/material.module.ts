import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

const materialComponents = [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule]

@NgModule({
  imports: [materialComponents], 
  exports: [materialComponents]
})
export class MaterialModule { }
