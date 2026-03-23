import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrxDividerComponent} from './components/drx-divider/drx-divider.component';



@NgModule({
  declarations: [DrxDividerComponent],
  imports: [
    CommonModule
  ],
  exports: [DrxDividerComponent]
})
export class SharedModule { }
