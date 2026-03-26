import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DrxDividerComponent} from './components/drx-divider/drx-divider.component';
import {DrxSectionItemComponent} from './components/drx-section-item/drx-section-item.component';



@NgModule({
  declarations: [DrxDividerComponent],
  imports: [
    CommonModule,
    DrxSectionItemComponent
  ],
  exports: [DrxDividerComponent, DrxSectionItemComponent]
})
export class SharedModule { }
