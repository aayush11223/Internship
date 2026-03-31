//  function to implement a simple event emitter

// A simple event emitter in JavaScript is an object that allows for the publish/subscribe (pub/sub) pattern, where it can trigger named events and have multiple functions (listeners) subscribe and react to those events.

// Used in real project
// - subscribe button
// - form submission
// - game (score bar, health bar, etc.)

const emitter = {
  events: {},

  // Subscribe
  on: function(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
  },

  // Emit
  emit: function(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(fn => fn(...args));
    }
  }
};

// Usage
emitter.on("greet", name => console.log(`Hello, ${name}!`));

emitter.emit("greet", "Aayush"); 

