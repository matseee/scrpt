const moment = require('moment');

const File = require('../../lib/utils/file');
const DataFile = require('./datafile');

const FILE_NAME_FORMAT = 'YYYYMMDD';

class Database {
    __path;

    constructor(path) {
        this.__path = path;

        if (!new File(path).exists()) {
            new File(path).createDirectory();
        }
    }

    startTask() {
        const currentDay = this.__createFile();
        if (currentDay.hasActiveTask()) {
            console.log('There is already an active task ...');
        } else {
            return currentDay.startTask();
        }
    }

    stopTask(description) {
        const currentDay = this.__createFile();
        if (!currentDay.hasActiveTask()) {
            console.log('There is no active task to stop ...');
        } else {
            return currentDay.stopTask(description);
        }
    }

    __createFile(momentObj) {
        return new DataFile(this.__path + '/' + moment(momentObj).format(FILE_NAME_FORMAT));
    }
}

module.exports = Database;