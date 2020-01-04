import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeEditComponent } from './hike-edit.component';

describe('HikeEditComponent', () => {
  let component: HikeEditComponent;
  let fixture: ComponentFixture<HikeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
