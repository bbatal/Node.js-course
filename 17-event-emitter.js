const EventEmitter = require('events');

// if u want to make something custom, you need to extend the class

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name}, ${id} `);
});

customEmitter.on('response', () => {
    console.log(`some other logic `);
});


// we pass data to the on methods
customEmitter.emit('response', 'john', 34);
