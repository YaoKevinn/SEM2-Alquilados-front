import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsContactComponent } from './needs-contact.component';

describe('NeedsContactComponent', () => {
  let component: NeedsContactComponent;
  let fixture: ComponentFixture<NeedsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedsContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
