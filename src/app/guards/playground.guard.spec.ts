import { TestBed } from '@angular/core/testing';

import { PlaygroundGuard } from './playground.guard';

describe('PlaygroundGuard', () => {
  let guard: PlaygroundGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlaygroundGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
