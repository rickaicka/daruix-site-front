import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrxHeader } from './drx-header';

describe('DrxHeader', () => {
  let component: DrxHeader;
  let fixture: ComponentFixture<DrxHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrxHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrxHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
