#!/usr/bin/env node
const shelljs = require('shelljs');
const args = require('args');

function checkGitAvailable() {
    if (!shelljs.which('git')) {
        console.log('Git is not available!');
        return false;
    }
    return true;
}

function getCommitPrefix() {
    const gitBranch = shelljs.exec('git rev-parse --abbrev-ref HEAD', {silent: true}).stdout;
    const branchPrefix = gitBranch.split('/')[0];
    const branchName = gitBranch.split('/')[1];

    switch (branchPrefix) {
        case 'feature':
            return `feat(${branchName.substr(0, branchName.length-1)}): `;
        case 'bugfix':
            return `fix(${branchName.substr(0, branchName.length-1)}): `;
        case 'change':
            return `change(${branchName.substr(0, branchName.length-1)}): `;
    }

    return '';
}

function commit(message) {
    if (checkGitAvailable()) {
        const completeMessage = getCommitPrefix() + message;
        shelljs.exec(`git commit -m "${completeMessage}"`);
    }
}

const params = args.parse(process.argv, {
    name: 'gcommit',
    value: '<commit-message>'
});

if (args.sub.length === 0) {
    args.showHelp();
} else {
    commit(args.sub[0]);
}