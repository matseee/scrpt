const moment = require('moment');

const Database = require('./database');
const File = require('../../lib/utils/file');

const homeDirectory = require('os').homedir();
const configDirectoryPath = homeDirectory + '/.ttr';
const databasePath = configDirectoryPath + '/data';

const TIME_FORMAT = 'HH:mm';

class TimeTracker {
    __config;
    __database;

    constructor() {
        this.__init();
    }

    /**
     * Initialize directory structure and database in the users home directory
     */
    __init() {
        const configDirectory = new File(configDirectoryPath);

        if (!configDirectory.exists()) {
            configDirectory.createDirectory();
        }

        this.__database = new Database(databasePath);
    }

    /**
     * Starts a new time tracking
     */
    start() {
        const newTask = this.__database.startTask();
        if (newTask) {
            console.log(`Start time tracking (${moment(newTask.__startTime).format(TIME_FORMAT)}) ...`);
        }
    }

    /**
     * Ends the current time tracking
     * @params {string} what have you done?
     */
    end(message) {
        const finishedTask = this.__database.endTask(message);
        if (finishedTask) {
            console.log(`End the time tracking '${finishedTask.getDescription()}' (${moment(finishedTask.getStartTime()).format(TIME_FORMAT)}-${moment(finishedTask.getEndTime()).format(TIME_FORMAT)}) ...`);
        }
    }

    /**
     * Lists the last recordings of the last days
     * @params {number} how many days should be displayed?
     */
    list(from, until, days = 5) {
        if (from && until) {
            this.__database.printTasksFromUntil(from, until);
        } else if (from) {
            this.__database.printTasksFrom(from);
        } else {
            this.__database.printLastTasks(days);
        }
    }
}

module.exports = TimeTracker;