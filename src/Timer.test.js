import { describe, it } from 'node:test';
import { equal } from 'node:assert/strict';

import { Timer } from './Timer.js';

describe('Timer', () => {
  describe('when accessing isStarted property', () => {
    it('returns correct value', () => {
      const timer = new Timer();

      equal(timer.isStarted, false);

      timer.start();

      equal(timer.isStarted, true);
    });
  });
});
