/**
 * Timer class with pause functionality.
 */
export class Timer {
  /**
   * Time timer was started.
   *
   * @type {number}
   */
  #startTime;

  /**
   * @type {boolean}
   */
  #isStarted;

  /**
   * @type {boolean}
   */
  #isPaused;

  /**
   * Time timer was paused.
   *
   * @type {number}
   */
  #pausedAt;

  /**
   * Time timer was started.
   *
   * @type {number}
   */
  #pausedTime;

  /**
   * Milliseconds since last tick.
   *
   * @type {number}
   */
  #deltaTime;

  /**
   * Time passed since timer was started.
   *
   * @type {number}
   */
  #elapsedTime;

  /**
   * Constructor.
   */
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
   * Milliseconds passed since last tick.
   *
   * @return {number}
   */
  get deltaTime() {
    if (!this.#isPaused) {
      return this.#deltaTime;
    }

    return 0;
  }

  /**
   * Seconds passed since last tick.
   *
   * @return {number}
   */
  get deltaSeconds() {
    return this.deltaTime / 1000;
  }

  /**
   * Milliseconds passed since timer was started.
   *
   * @return {number}
   */
  get elapsedTime() {
    return this.#elapsedTime;
  }

  /**
   * Seconds passed since timer was started.
   *
   * @return {number}
   */
  get elapsedSeconds() {
    return this.elapsedTime / 1000;
  }

  /**
   * Tells whether the timer is started.
   *
   * @return {boolean}
   */
  get isStarted() {
    return this.#isStarted;
  }

  /**
   * Tells whether the timer is paused.
   *
   * @return {boolean}
   */
  get isPaused() {
    return this.#isPaused;
  }

  /**
   * Start the timer.
   *
   * @return {void}
   */
  start() {
    if (!this.#isStarted) {
      this.#startTime = performance.now();
      this.#isStarted = true;
    }
  }

  /**
   * Pause the timer.
   *
   * @return {void}
   */
  pause() {
    if (!this.#isPaused) {
      this.#pausedAt = performance.now();
      this.#isPaused = true;
    }
  }

  /**
   * Unpause the timer.
   *
   * @return {void}
   */
  resume() {
    if (this.#isPaused) {
      this.#pausedTime += performance.now() - this.#pausedAt;
      this.#isPaused = false;
    }
  }

  /**
   * Toggle pause on/off.
   *
   * @return {void}
   */
  toggle() {
    if (this.#isPaused) {
      this.resume();
    } else {
      this.pause();
    }
  }

  /**
   * Get the current time.
   *
   * This will respect the paused state of the timer.
   *
   * @return {void}
   */
  now() {
    if (this.#isPaused) {
      return this.#pausedAt - this.#pausedTime;
    }

    return performance.now() - this.#pausedTime;
  }

  /**
   * Progress the timer one tick.
   *
   * This function should be executed inside the main loop.
   *
   * @return {void}
   */
  tick() {
    const deltaTime = this.now() - this.#startTime - this.#elapsedTime;
    this.#elapsedTime += deltaTime;
    this.#deltaTime = deltaTime;
  }
}
