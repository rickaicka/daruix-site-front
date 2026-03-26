import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-drx-section-item',
  imports: [
    NgIf
  ],
  templateUrl: './drx-section-item.component.html',
  styleUrl: './drx-section-item.component.scss',
})
export class DrxSectionItemComponent {


  @Input() sizeType: string | undefined = '';
  @Input() isBtn: boolean = false;
  @Input() sizeBtn: string | undefined = 'm';
  @Input() typeTitle: string | undefined = '';
  @Input() typeDesc: string | undefined = '';
  @Input() typeTextLink: string | undefined = 'Ver mais';
}
