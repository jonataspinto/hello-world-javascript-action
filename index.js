const core = require('@actions/core');
const github = require('@actions/github');
// const json2md = require("json2md");
const fs = require("fs");
const jestOuputFile = fs.readFileSync("./result.json");
// const { testResults } = JSON.parse(jestOuputFile);
// const { runEvaluator } = require('./src/evaluator');

const positiveIcon = ':white_check_mark:';
const negativeIcon = ':x:';

// evaluations [
//   { description: 'Soma apenas com numeros impar', grade: 3 },
//   { description: 'Soma apenas com numeros impar', grade: 3 },
//   { description: 'Soma de numeros pares ', grade: 1 }
// ]
const data = JSON.parse(jestOuputFile)

try {
  // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);
  // const time = "TESTE RETORNO";
//   const data = runEvaluator(testResults)
//   const rows = data.evaluations.map(value => {
//     const row = [];
//     row.push(value.description);
//     row.push(value.grade);
//     row.push(value.grade > 1 ? positiveIcon : negativeIcon);
//     return row;
//   })
//   const result = json2md([
//     { h1: "Resultado" },
//     { table: {
//       headers: ["Descrição", "nota", "resultado"],
//       rows
//     }}
// ])
  core.setOutput("time", JSON.stringify(data));
  // Get the JSON `webhook` payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}