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

    /**
     * Starts a new task, writes its to file and returns the task
     * @returns {Task} created Task
     */
    startTask() {
        const currentDay = this.__createFile();
        if (currentDay.hasActiveTask()) {
            console.log('There is already an active task ...');
        } else {
            return currentDay.startTask();
        }
    }

    /**
     * Ends the currently active task and returns it
     * @param {string} description 
     * @returns {Task} finished Task
     */
    endTask(description) {
        const currentDay = this.__createFile();
        if (!currentDay.hasActiveTask()) {
            console.log('There is no active task to stop ...');
        } else {
            return currentDay.endTask(description);
        }
    }

    /**
     * Creates an DataFile instance of the given date
     * @param {moment} momentObj 
     */
    __createFile(momentObj) {
        return new DataFile(this.__path + '/' + moment(momentObj).format(FILE_NAME_FORMAT));
    }
}

module.exports = Database;