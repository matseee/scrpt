const File = require('./file');

class JsonFile extends File {
    /**
     * Constructor 
     * @param {*} filePath 
     */
    constructor(filePath) {
        super(filePath);
    }

    /**
     * Sync read object from file 
     * @returns {object} content
     */
    read() {
        try {
            return JSON.parse(super.read());
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    /**
     * Writes an object to file
     * @param {object} data 
     * @returns {boolean} successful?
     */
    write(data) {
        try {
            const stringifiedData = JSON.stringify(data, null, 4);
            super.write(stringifiedData);
            return true;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

module.exports = JsonFile;