import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescBoxComponent } from './desc-box.component';

describe('DescBoxComponent', () => {
  let component: DescBoxComponent;
  let fixture: ComponentFixture<DescBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
