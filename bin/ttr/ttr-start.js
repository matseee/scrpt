#!/usr/bin/env node
const figlet = require('figlet');

const TimeTracker = require('../../lib/ttr/ttr');

console.log(figlet.textSync('ttr', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

const timeTracker = new TimeTracker();
timeTracker.start();