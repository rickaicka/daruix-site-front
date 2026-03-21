import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrxFooter } from './drx-footer';

describe('DrxFooter', () => {
  let component: DrxFooter;
  let fixture: ComponentFixture<DrxFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrxFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrxFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
