#!/usr/bin/env node
const args = require('args');
const figlet = require('figlet');

const TimeTracker = require('../../lib/ttr/ttr');

console.log(figlet.textSync('ttr', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

const params = args.parse(process.argv, {
    name: 'ttr end',
    value: '<task description>'
});

if (!args.sub.length) {
    args.showHelp();
} else {
    const timeTracker = new TimeTracker();
    timeTracker.end(args.sub[ 0 ]);
}