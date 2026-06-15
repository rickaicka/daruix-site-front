import {Component, Input} from '@angular/core';
import {LucideFolderOpen, LucideImageOff, LucideUsers} from '@lucide/angular';

@Component({
  selector: 'app-drx-empty-response',
  imports: [
    LucideFolderOpen,
    LucideImageOff,
  ],
  templateUrl: './drx-empty-response.component.html',
  styleUrl: './drx-empty-response.component.scss',
})
export class DrxEmptyResponseComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() hasGallery: boolean = false;
}
