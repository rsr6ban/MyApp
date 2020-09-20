import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindigComponent } from './databindig.component';

describe('DatabindigComponent', () => {
  let component: DatabindigComponent;
  let fixture: ComponentFixture<DatabindigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
