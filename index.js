const fs = require("fs");
const readline = require("readline");

/**
 * Reads a file line by line and returns lines that match the provided regex.
 * @param {string} filePath - The path to the file to be read.
 * @param {RegExp} regex - The regex to match lines. Default set to null.
 * @returns {Promise<string[]>} - A promise that resolves with an array of matching lines.
 * 
 * **example.js:**

```javascript
const readLinesWithRegex = require('line-reader-regex');

const filePath = 'sample.txt';
const regex = /test/;

// Without async-await (.then() chaining)
readLinesWithRegex(filePath, regex)
  .then((lines) => {
    console.log("Matching lines:", lines);
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });

// With async-await
const readFileAsync = async () => {
  const data = await readLinesWithRegex(filePath, regex);
  console.log("🚀 data:", data);
};
```
 */
function readLinesWithRegex(filePath, regex = null) {
  return new Promise((resolve, reject) => {
    const matchingLines = [];
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      if (regex) {
        if (regex.test(line)) {
          matchingLines.push(line);
        }
      } else {
        matchingLines.push(line);
      }
    });

    rl.on("close", () => {
      resolve(matchingLines);
    });

    rl.on("error", (err) => {
      reject(err);
    });
  });
}

module.exports = readLinesWithRegex;
