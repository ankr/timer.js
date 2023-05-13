# pausable-game-timer

A simple timer class to be used in game loops. Support pausing and resuming.

## Usage

Timer comes with a simple api.

```javascript
// Start by creating a single Timer instance to be used everywhere.
const timer = new Timer();

// Make sure to tick the timer inside your game loop.
timer.tick();

// Everywhere you use performance.now() or Date.now() use this instead.
timer.now();

// You can pause/resume/toggle the timer whenever you want.
timer.pause();
timer.resume();
timer.toggle();

// Inside the game loop you can access the following properties
timer.deltaTime; // time since last tick
timer.elapsedTime; // total time since timer was started
```

Here it is put together in an example:
```javascript
let timer;

const update = (deltaTime) => {
    // Update game logic using `deltaTime`
};

const render = () => {
    // ...
};

const loop = () => {
    requestAnimationFrame(loop);
    timer.tick(); // Make sure to tick timer every frame
    update(timer.deltaTime);
    render();
};

const start = () => {
    timer = new Timer();
    loop();
};

start();
```
