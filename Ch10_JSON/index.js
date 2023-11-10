const fs = require('fs');

fs.readFile('settings.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log('Error reading file from disk:', err);
        return;
    }

    console.log(jsonString);

    try {
        const data = JSON.parse(jsonString);
        console.log(data);
    } catch (err) {
        console.log('Error parsing JSON string:', err);
    }
});