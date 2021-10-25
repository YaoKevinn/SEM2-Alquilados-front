import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsDetailComponent } from './needs-detail.component';

describe('NeedsDetailComponent', () => {
  let component: NeedsDetailComponent;
  let fixture: ComponentFixture<NeedsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
