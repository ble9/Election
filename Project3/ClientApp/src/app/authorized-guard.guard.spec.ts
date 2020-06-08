import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizedGuardGuard } from './authorized-guard.guard';

describe('AuthorizedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedGuardGuard]
    });
  });

  it('should ...', inject([AuthorizedGuardGuard], (guard: AuthorizedGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
