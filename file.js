var evt = require('events');

function FileStream(){
    this._file = "";
}

FileStream.prototype = new evt.EventEmitter();

FileStream.prototype.readFile = function(path){
    this._file = path;
    console.log('Reading file...');
    this.emit('read', path);
};


FileStream.prototype.WriteFile = function(path){
    this._file = path;
    console.log('Writing file...');
    
    this.emit('write', path);
};


var fileStream = new FileStream();

fileStream.on('read', function(path) {
    console.log('File read from path:', path);
});

fileStream.on('write', function(path) {
    console.log('File written to path:', path);
});


fileStream.readFile('/path/to/file.txt');
fileStream.WriteFile('/path/to/file.txt');
