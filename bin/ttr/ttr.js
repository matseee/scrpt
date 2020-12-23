#!/usr/bin/env node
const args = require('args');
const figlet = require('figlet');

args.command('start', 'Starts a new record', null, [ 's' ]);
args.command('end', 'Ends the active record', null, [ 'e' ]);
args.command('list', 'Lists the records', null, [ 'l' ]);

args.option('help', 'Display help');

console.log(figlet.textSync('ttr', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

const params = args.parse(process.argv, {
    name: 'ttr',
    value: '',
    help: false
});

if (!args.sub.length || params['help']) {
    args.showHelp();
}
