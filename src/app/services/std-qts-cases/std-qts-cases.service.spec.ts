import { TestBed } from '@angular/core/testing';

import { StdQtsCasesService } from './std-qts-cases.service';

describe('StdQtsCasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StdQtsCasesService = TestBed.get(StdQtsCasesService);
    expect(service).toBeTruthy();
  });
});
