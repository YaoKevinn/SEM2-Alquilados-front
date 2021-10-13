import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNeedsComponent } from './my-needs.component';

describe('MyNeedsComponent', () => {
  let component: MyNeedsComponent;
  let fixture: ComponentFixture<MyNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
