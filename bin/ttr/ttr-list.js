#!/usr/bin/env node
const args = require('args');
const TimeTracker = require('../../lib/ttr/ttr');

args.option('from', 'From date');
args.option('until', 'Until date');

args.option('help', 'Display help');

const params = args.parse(process.argv, {
    name: 'ttr list',
    value: '',
    version: false,
    help: false
});

if (params['help']) {
    args.showHelp();
} else {
    new TimeTracker().list(params['from'], params['until']);
}
