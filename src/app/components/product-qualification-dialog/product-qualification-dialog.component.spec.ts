import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQualificationDialogComponent } from './product-qualification-dialog.component';

describe('ProductQualificationDialogComponent', () => {
  let component: ProductQualificationDialogComponent;
  let fixture: ComponentFixture<ProductQualificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductQualificationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQualificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
