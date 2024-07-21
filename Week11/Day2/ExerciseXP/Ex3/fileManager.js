import * as fs from 'node:fs';

export function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, data);
    });
}

export function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
}

