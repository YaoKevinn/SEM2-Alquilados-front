import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSuccessDialogComponent } from './publication-success-dialog.component';

describe('PublicationSuccessDialogComponent', () => {
  let component: PublicationSuccessDialogComponent;
  let fixture: ComponentFixture<PublicationSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationSuccessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
