import { NgModule } from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import {DrxDividerComponent} from './components/drx-divider/drx-divider.component';
import {DrxSectionItemComponent} from './components/drx-section-item/drx-section-item.component';
import {DrxEmptyResponseComponent} from './components/drx-empty-response/drx-empty-response.component';



@NgModule({
  declarations: [DrxDividerComponent],
  imports: [
    CommonModule,
    DrxSectionItemComponent,
    JsonPipe
  ],
  exports: [
    DrxDividerComponent,
    DrxSectionItemComponent,
    JsonPipe]
})
export class SharedModule { }
