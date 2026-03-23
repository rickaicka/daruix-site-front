import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrxDividerComponent } from './drx-divider.component';

describe('DrxDividerComponent', () => {
  let component: DrxDividerComponent;
  let fixture: ComponentFixture<DrxDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrxDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrxDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
