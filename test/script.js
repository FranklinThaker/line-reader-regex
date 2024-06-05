const readLinesWithRegex = require("line-reader-regex");

const filePath = "sample.txt";
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

readFileAsync();

