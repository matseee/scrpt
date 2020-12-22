#!/usr/bin/env node
const args = require('args');
const TimeTracker = require('../../lib/ttr/ttr');

// args.option('from', 'from output');
// args.option('until', 'until output');

const params = args.parse(process.argv, {
    name: 'ttr list',
    value: ''
});

new TimeTracker().list();