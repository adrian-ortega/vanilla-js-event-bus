# Simple event bus built using vanilla JS

## Usage

Subscribe to any event and emit it from any action. Here's a very simple example.

```js
import bus from ./Bus;

bus.on('fire-alert', (message) => {
    alert(message);
});

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    bus.emit('fire-alert');
})
```