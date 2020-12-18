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
     * @returns {boolean} succesful
     */
    startTask() {
        this.__readTasks();

        const task = new Task();
        task.start(moment().format(TIME_FORMAT));
        this.__tasks.push(task);

        return this.__writeTasks();
    }

    /**
     * Ends the active task and write its to file
     * @param {string} description
     * @returns {boolean} succesful
     */
    endTask(description) {
        if (!this.exists()) {
            return false;
        }

        this.__readTasks();
        this.__tasks[this.__tasks.length - 1].end(
            moment().format(TIME_FORMAT),
            description
        );

        return this.__writeTasks();
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
     * Writes the tasks to the file
     * @returns {boolean} succesful
     */
    __writeTasks() {
        const content = '';

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
        const lines = this.__content.split('\n');
        this.__tasks = [];

        for (const line of lines) {
            this.__tasks.push(new Task().fromLine(line));
        }
    }
}

module.exports = DataFile;