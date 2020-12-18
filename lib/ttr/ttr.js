const Database = require('./database');
const File = require('../../lib/utils/file');

const homeDirectory = require('os').homedir();
const configDirectoryPath = homeDirectory + '/.ttr';
const databasePath = configDirectoryPath + '/data';

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
        if (this.__database.startTask()) {
            console.log('Start time tracking ...');
        }
    }

    /**
     * Ends the current time tracking
     * @params {string} what have you done?
     */
    end(message) {
        if (this.__database.stopTask(message)) {
            console.log('End the time tracking ...');
        }
    }

    /**
     * Lists the last recordings of the last days
     * @params {number} how many days should be displayed?
     */
    list(pastDays) {
        console.log('List the time tracking ...');
    }
}

module.exports = TimeTracker;