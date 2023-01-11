import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

const materialComponents = [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatTabsModule]

@NgModule({
  imports: [materialComponents], 
  exports: [materialComponents]
})
export class MaterialModule { }
