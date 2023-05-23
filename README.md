# Timer.js

A simple timer class with pause functionality.

## Installation

```
npm install @ankr/timer
```

## Usage

Timer comes with a simple api.

```javascript
import { Timer } from "@ankr/timer";

// Start by creating a single Timer instance to be used everywhere.
const timer = new Timer();

// Start the timer before starting the game loop.
timer.start();

// Make sure to tick the timer inside your game loop.
timer.tick();

// Everywhere you use performance.now() or Date.now() use this instead.
timer.now();

// You can pause/resume/toggle the timer whenever you want.
timer.pause();
timer.resume();
timer.toggle();

// You know have access to delta time and total elapsed time through these properties
timer.deltaTime; // delta time in milliseconds
timer.elapsedTime; // total time in milliseconds
timer.deltaSeconds; // delta time in seconds
timer.elapsedSeconds; // total time in seconds

// There are also properties for checking if the timer is started and/or paused
timer.isStarted;
timer.isPaused;
```

## Example

Here it is put together in a small example.

```javascript
import { Timer } from "@ankr/timer";

const timer = new Timer();

const update = () => {
    // Update game logic using `timer.deltaTime`
};

const loop = () => {
    requestAnimationFrame(loop);
    timer.tick(); // Make sure to tick timer every frame
    update();
    render();
};

const start = () => {
    timer.start(); // Starting the timer
    loop();
};

start();
```
