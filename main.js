var evt = require('events');

var emt = new evt.EventEmitter;

var openFolder = () => {
    console.log('Folder has opened');
}

var readFile = () => {
    console.log('Reading file...');
}

var update = () =>
{
    console.log('Updating');
}

emt.on('click', openFolder);
emt.addListener('click', update);
emt.on('shift', readFile);

emt.emit('click');
emt.emit('shift');