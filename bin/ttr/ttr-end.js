#!/usr/bin/env node
const args = require('args');

const TimeTracker = require('../../lib/ttr/ttr');

const params = args.parse(process.argv, {
    name: 'ttr end',
    value: '<task description>'
});

if (!args.sub.length) {
    console.log('Please enter a task description ...');
} else {
    const timeTracker = new TimeTracker();
    timeTracker.end(args.sub[ 0 ]);
}