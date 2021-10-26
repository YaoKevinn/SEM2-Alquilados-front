import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSuccessDialogComponent } from './offer-success-dialog.component';

describe('OfferSuccessDialogComponent', () => {
  let component: OfferSuccessDialogComponent;
  let fixture: ComponentFixture<OfferSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSuccessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
