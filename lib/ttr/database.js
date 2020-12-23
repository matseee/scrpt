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
     * Prints out the tasks of the X last days
     * @param {number} lastDays 
     */
    printLastTasks(cntLastDays) {
        let dayDataFile = null;
        let totalTimeInMins = 0;

        for (let i = 0; i < cntLastDays; i++) {
            console.log(moment().subtract(i, 'd').format('DD.MM.YYYY') + ':');
            dayDataFile = this.__createFile(moment().subtract(i, 'days'));
            totalTimeInMins += dayDataFile.printTasks();
        }

        console.log('Total time in minutes: ', totalTimeInMins);
    }

    /**
     * Prints tasks from the 'from'-date until the 'until'-date
     * @param {datestring} from 
     * @param {datestring} until 
     */
    printTasksFromUntil(from, until) {
        let startDate = moment(from, 'YYYYMMDD');
        let endDate = moment(until, 'YYYYMMDD');
        let currentDate = moment(from, 'YYYYMMDD');

        let dayDataFile = null;
        let totalTimeInMins = 0;

        if (startDate.isAfter(endDate)) {
            currentDate = endDate;
            endDate = startDate;
            startDate = currentDate;
        }

        do {
            console.log(currentDate.format('DD.MM.YYYY') + ':');

            dayDataFile = this.__createFile(currentDate);
            totalTimeInMins += dayDataFile.printTasks();

            currentDate.add(1, 'days');
        } while(currentDate.isSameOrBefore(endDate));

        console.log('Total time in minutes: ', totalTimeInMins);
    }

    /**
     * Print tasks from date until now 
     * @param {datestring} from 
     */    
    printTasksFrom(from) {
        this.printTasksFromUntil(from, moment().format());
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