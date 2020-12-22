#!/usr/bin/env node
const args = require('args');

const TimeTracker = require('../../lib/ttr/ttr');

const params = args.parse(process.argv, {
    name: 'ttr end',
    value: '<task description>'
});

if (args.sub.length < 2) {
    console.log('Please enter a task description ...');
} else {
    new TimeTracker().end(args.sub[ 1 ]);
}