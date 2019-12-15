import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletMapExampleComponent } from './leaflet-map-example.component';

describe('LeafletMapExampleComponent', () => {
  let component: LeafletMapExampleComponent;
  let fixture: ComponentFixture<LeafletMapExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletMapExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletMapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
