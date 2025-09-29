import { TestBed } from '@angular/core/testing';

import { Colormind } from './colormind';

describe('Colormind', () => {
  let service: Colormind;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Colormind);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
