const { writeFileSync } = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "data.txt");

const data = {
  name: "Gopal Sasmal",
  age: 23,
  university: "Chitkara University",
};
(async () => {
  try {
    writeFileSync(filepath, JSON.stringify(data), "utf8");
    console.log("Successfully write somethign");
  } catch (err) {
    console.log("Error Occured when write file");
  }
})();
