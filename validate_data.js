
const fs = require('fs');
const content = fs.readFileSync('/Users/renelrosene/Desktop/index.html/main.js', 'utf8');

// Extract crechesData array using regex
const match = content.match(/let crechesData = (\[[\s\S]*?\]);/);
if (!match) {
    console.error("Could not find crechesData in main.js");
    process.exit(1);
}

const crechesDataStr = match[1];

// We can't purely JSON.parse because it's JS, not JSON (contains comments, etc.)
// But we can try to evaluate it in a safe way or just use regex to find potential issues.
// Let's try to parse it as an array of objects roughly.

try {
    // Basic cleanup for simple eval
    const data = eval(crechesDataStr);
    console.log(`Found ${data.length} creches.`);

    data.forEach((c, i) => {
        if (!c.name) console.error(`Creche at index ${i} is missing name.`);
        if (!c.city) console.error(`Creche at index ${i} is missing city.`);
    });
} catch (e) {
    console.error("Error parsing crechesData:", e.message);
}
