import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrxEmptyResponseComponent } from './drx-empty-response.component';

describe('DrxEmptyResponseComponent', () => {
  let component: DrxEmptyResponseComponent;
  let fixture: ComponentFixture<DrxEmptyResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrxEmptyResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrxEmptyResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
