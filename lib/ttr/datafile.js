const moment = require('moment');

const File = require('../utils/file');
const Task = require('./task');

const TIME_FORMAT = 'HH:mm';

class DataFile extends File {
    __tasks;

    constructor(path) {
        super(path);
    }

    /**
     * Starts a new task and write its to file
     * @returns {Task} started Task
     */
    startTask() {
        this.__readTasks();

        const task = new Task();
        task.start(moment().format());
        this.__tasks.push(task);
        
        if (this.__writeTasks()) {
            return task;
        } else {
            return null;
        }
    }

    /**
     * Ends the active task and write its to file
     * @param {string} description
     * @returns {Task} finished Task
     */
    endTask(description) {
        if (!this.exists()) {
            return false;
        }

        this.__readTasks();

        this.__tasks[this.__tasks.length - 1].end(
            moment().format(),
            description
        );
        
        if (this.__writeTasks()) {
            return this.__tasks[this.__tasks.length - 1];
        } else {
            return null;
        }
    }

    /**
     * Check if the file contains an active task
     */
    hasActiveTask() {
        if (!this.exists()) {
            return false;
        }

        this.__readTasks();

        return this.__tasks.length == 0
            || !this.__tasks[this.__tasks.length - 1].isComplete();
    }

    /**
     * Prints out the tasks of a dayfile
     * @returns {number} Time in minutes
     */
    printTasks() {
        let timeInMins = 0;
        console.log('------------------------------------------------')
        
        if (this.exists()) {
            this.__readTasks();
    
            for (const task of this.__tasks) {
                const realMinutes = moment(task.getEndTime()).diff(moment(task.getStartTime()), 'minutes');
                const roundedMinutes = (Math.ceil((realMinutes === 0 ? 1 : realMinutes) % 15) * 15);
                console.log(`${moment(task.getStartTime()).format(TIME_FORMAT)}-${moment(task.getEndTime()).format(TIME_FORMAT)}: ${task.getDescription()} (${roundedMinutes} mins)`);
                timeInMins += roundedMinutes;
            }
        }

        console.log('------------------------------------------------\n');
        return timeInMins;
    }

    /**
     * Writes the tasks to the file
     * @returns {boolean} succesful
     */
    __writeTasks() {
        let content = '';

        for (const task of this.__tasks) {
            content += task.toLine() + '\n';
        }

        return this.write(content);
    }

    /**
     * Reads the tasks of the file
     */
    __readTasks() {
        this.__parseTasks(this.__readContent());
    }

    /**
     * Reads the content from file
     * @returns {string} DataFile as string
     */
    __readContent() {
        if (this.exists()) {
            return this.read().toString();
        } else {
            return '';
        }
    }

    /**
     * Creates tasks from raw content
     * @params {string} content as string
     */
    __parseTasks(content) {
        this.__tasks = [];

        if (content) {
            const lines = content.split('\n');

            for (const line of lines) {
                if (line.indexOf(';') > -1) {
                    this.__tasks.push(new Task().fromLine(line));
                }
            }
        }
    }
}

module.exports = DataFile;