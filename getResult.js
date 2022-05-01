const fs = require("fs");

function getResults () {
  const jestOuputFile = fs.readFileSync("./result.json");
  const { testResults } = JSON.parse(jestOuputFile);
  return testResults
}

module.exports = {
  getResults
}