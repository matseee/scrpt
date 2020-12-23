class Task {
    __startTime = '';
    __endTime = '';
    __description = '';

    constructor() { }

    /**
     * Start a new task
     * @param {string} time 
     */
    start(time) {
        this.__startTime = time;
    }

    /**
     * Ends a task and sets a description
     * @param {string} time 
     * @param {string} description 
     */
    end(time, description) {
        this.__endTime = time;
        this.__description = description;
    }

    /**
     * Checks if the task is complete
     * @returns {boolean} complete (true), incomplete (false)
     */
    isComplete() {
        return this.__startTime && this.__endTime && this.__description;
    }

    /**
     * Creates a task from a DataFile line
     * @param {string} line 
     * @returns {Task} task
     */
    fromLine(line) {
        const task = new Task();
        const splittedElements = line.split(';');
        task.__startTime = splittedElements[0] ? splittedElements[0] : '';
        task.__endTime = splittedElements[1] ? splittedElements[1] : '';
        task.__description = splittedElements[2] ? splittedElements[2] : '';
        return task;
    }

    /**
     * Converts the task to a DataFile line
     * @returns {string} DataFile line
     */
    toLine() {
        return `${this.__startTime};${this.__endTime};${this.__description};`;
    }

    /**
     * Getter __startTime
     * @returns {string} startTime
     */
    getStartTime() {
        return this.__startTime;
    }

    /**
     * Getter __endTime
     * @returns {string} endTime
     */
    getEndTime() {
        return this.__endTime;
    }

    /**
     * Getter _description
     * @returns {string} description
     */
    getDescription() {
        return this.__description;
    }
}

module.exports = Task;