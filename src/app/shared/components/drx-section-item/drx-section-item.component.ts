import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-drx-section-item',
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './drx-section-item.component.html',
  styleUrl: './drx-section-item.component.scss',
})
export class DrxSectionItemComponent {

  @Input() sizeType: string | undefined = '';
  @Input() slug: string | undefined = '';
  @Input() orderService: number | undefined;
  @Input() isBtn: boolean = false;
  @Input() sizeBtn: string | undefined = 'm';
  @Input() typeTitle: string | undefined = '';
  @Input() typeDesc: string | undefined = '';
  @Input() typeTextLink: string | undefined = 'Ver mais';
  @Input() imgFace: any | undefined = '';

  constructor(private router: Router) {}

  goToService(): void {
    this.router.navigate(['/servicos'], {
      state: {
        slug: this.slug,
        orderService: this.orderService,
        title: this.typeTitle,
      }
    });
  }
}
