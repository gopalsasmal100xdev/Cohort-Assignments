const { readFileSync } = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "data.txt");

(async () => {
  try {
    const reader = readFileSync(filepath, { encoding: "utf8" });
    console.log(JSON.parse(reader));
  } catch (err) {
    console.log("Error Occured when read file");
  }
})();
