import { TestBed } from '@angular/core/testing';

import { NgUsMapService } from './ng-us-map.service';

describe('NgUsMapService', () => {
  let service: NgUsMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUsMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
