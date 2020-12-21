#!/usr/bin/env node
const figlet = require('figlet');
const shelljs = require('shelljs');

function checkGitAvailable() {
    if (!shelljs.which('git')) {
        console.log('Git is not available!');
        return false;
    }
    return true;
}


function status() {
    if (checkGitAvailable()) {
        shelljs.exec('git status');
    }
}

console.log(figlet.textSync('gstatus', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

status();