export class Timer {
  // Timing
  #startTime;
  #isStarted;

  // Pausing
  #isPaused;
  #pausedAt;
  #pausedTime;

  // Exposed values
  #deltaTime;
  #elapsedTime;

  constructor() {
    this.#startTime = 0;
    this.#isStarted = false;
    this.#isPaused = false;
    this.#pausedAt = 0;
    this.#pausedTime = 0;
    this.#deltaTime = 0;
    this.#elapsedTime = 0;
  }

  /**
   * Amount of time since last tick.
   */
  get deltaTime() {
    if (!this.#isPaused) {
      return this.#deltaTime / 1000;
    }

    return 0;
  }

  /**
   * Total amount of time since the timer was started.
   */
  get elapsedTime() {
    return this.#elapsedTime / 1000;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get isPaused() {
    return this.#isPaused;
  }

  start() {
    if (!this.#isStarted) {
      this.#startTime = performance.now();
      this.#isStarted = true;
    }
  }

  pause() {
    if (!this.#isPaused) {
      this.#pausedAt = performance.now();
      this.#isPaused = true;
    }
  }

  resume() {
    if (this.#isPaused) {
      this.#pausedTime += performance.now() - this.#pausedAt;
      this.#isPaused = false;
    }
  }

  toggle() {
    if (this.#isPaused) {
      this.resume();
    } else {
      this.pause();
    }
  }

  now() {
    if (this.#isPaused) {
      return this.#pausedAt - this.#pausedTime;
    }

    return performance.now() - this.#pausedTime;
  }

  tick() {
    const deltaTime = this.now() - this.#startTime - this.#elapsedTime;
    this.#elapsedTime += deltaTime;
    this.#deltaTime = deltaTime;
  }
}
