import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewloanapplicationsComponent } from './reviewloanapplications.component';

describe('ReviewloanapplicationsComponent', () => {
  let component: ReviewloanapplicationsComponent;
  let fixture: ComponentFixture<ReviewloanapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewloanapplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewloanapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
