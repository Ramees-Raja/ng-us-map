import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUsMapComponent } from './ng-us-map.component';

describe('NgUsMapComponent', () => {
  let component: NgUsMapComponent;
  let fixture: ComponentFixture<NgUsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgUsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgUsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
