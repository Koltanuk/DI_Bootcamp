import {readFile, writeFile } from "./fileManager.js";

readFile('HelloWorld.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Content of Hello World.txt:', data);
    }
});

writeFile('ByeWorld.txt', 'Writing to the file', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Successfully wrote to Bye World.txt');
    }
});