#!/usr/bin/env node
const args = require('args');
const figlet = require('figlet');

args.command('start', 'Starts the time record', null, [ 's' ]);
args.command('pause', 'Pauses the time record', null, [ 'p' ]);
args.command('end', 'Ends the time record', null, [ 'e' ]);
args.command('list', 'Lists the time records of the current week', null, [ 'l' ]);

console.log(figlet.textSync('ttr', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

const params = args.parse(process.argv, {
    name: 'ttr',
    value: ''
});

if (!args.sub.length) {
    args.showHelp();
}
