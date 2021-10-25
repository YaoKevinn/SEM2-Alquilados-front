import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOfferDialogComponent } from './confirm-offer-dialog.component';

describe('ConfirmOfferDialogComponent', () => {
  let component: ConfirmOfferDialogComponent;
  let fixture: ComponentFixture<ConfirmOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmOfferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
