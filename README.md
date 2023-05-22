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

// Inside the game loop you can access the following properties
timer.deltaTime; // time since last tick
timer.elapsedTime; // total time since timer was started

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
