const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "data.txt");

function readFile() {
  try {
    const reader = readFileSync(filepath, { encoding: "utf8" });
    return reader;
  } catch (err) {
    console.log("Error Occured when read file");
  }
}

function writeFile(data) {
  try {
    writeFileSync(filepath, data, "utf8");
  } catch (err) {
    console.log("Error Occured when read file");
  }
}

(async () => {
  const data = readFile();
  const words = data.split(/\s+/);
  console.log(words.join(" "));
  writeFile(words.join(" "));
})();
