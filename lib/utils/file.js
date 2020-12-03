const fs = require('fs');

class File {
    path;

    /**
     * Construtctor
     * @param {string} path
     */
    constructor(filePath) {
        this.path = filePath;
    }

    /**
     * Sync read contents from file 
     * @returns {string} content
     */
    read() {
        try {
            return fs.readFileSync(this.path);
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    /**
     * Sync write contents to file
     * @param {string} data 
     * @returns {boolean} successful?
     */
    write(data) {
        try {
            fs.writeFileSync(this.path, data);
            return true;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    /**
     * Check if a file or directory exists
     * @returns {boolean} file exists or not
     */
    exists() {
        try {
            return fs.existsSync(this.path);
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    /**
     * Creates a directory
     * @returns {boolean} successful?
     */
    createDirectory() {
        try {
            fs.mkdirSync(this.path);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}

module.exports = File;