import { describe, it } from 'node:test';
import { equal } from 'node:assert/strict';

import { Timer } from '../index.js';

describe('Timer', () => {
  describe("isStarted property", () => {
    it("returns correct value", () => {
      const timer = new Timer();

      equal(timer.isStarted, false);

      timer.start();

      equal(timer.isStarted, true);
    });
  });

  describe("isPaused property", () => {
    it("returns correct value", () => {
      const timer = new Timer();

      equal(timer.isPaused, false);

      timer.pause();

      equal(timer.isPaused, true);

      timer.resume();

      equal(timer.isPaused, false);
    });
  });
});
