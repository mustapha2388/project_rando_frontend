import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeListeComponent } from './hike-liste.component';

describe('HikeListeComponent', () => {
  let component: HikeListeComponent;
  let fixture: ComponentFixture<HikeListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
