import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageloaderrorComponent } from './pageloaderror.component';

describe('PageloaderrorComponent', () => {
  let component: PageloaderrorComponent;
  let fixture: ComponentFixture<PageloaderrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageloaderrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageloaderrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
