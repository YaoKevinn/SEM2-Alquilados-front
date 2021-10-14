import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationDialogComponent } from './qualification-dialog.component';

describe('QualificationDialogComponent', () => {
  let component: QualificationDialogComponent;
  let fixture: ComponentFixture<QualificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
