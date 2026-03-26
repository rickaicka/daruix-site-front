import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrxSectionItemComponent } from './drx-section-item.component';

describe('DrxSectionItemComponent', () => {
  let component: DrxSectionItemComponent;
  let fixture: ComponentFixture<DrxSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrxSectionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrxSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
