
# line-reader-regex
A Node.js package to read a file line by line and extract lines based on a regex match.
By default, It returns every line.


## Installation
Install my-project with npm

```bash
  npm install line-reader-regex
```


## Usage/Examples
```javascript
const readLinesWithRegex = require('line-reader-regex');

const filePath = 'path/to/your/large/file.txt';
const regex = /your-regex/;

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


## Feedback
If you have any feedback, please reach out to me at jarvisfranklinthaker@gmail.com



## Authors
- [Franklin Thaker](https://www.github.com/FranklinThaker)

