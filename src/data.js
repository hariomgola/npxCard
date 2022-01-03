#!/usr/bin/env node

"use strict";
// importing libraries and data
const boxen = require("boxen");
const chalk = require("chalk");
const data = require("./data.json");

// creating const color
const labelcolor = "#ffe000";
const companynameColor = "#ffe000";
const _emptyString = ``;
const conditionColor = "#7f7fd5";
const _condition = "#f2994a";
const _content = "#d3cce3";
const boxColor = "#f2994a";

const maindata = {
  // Label section
  labelWork: `${chalk.hex(labelcolor).bold(`       Work:`)}`,
  labelTwitter: `${chalk.hex(labelcolor).bold(`    Twitter:`)}`,
  labelGitHub: `${chalk.hex(labelcolor).bold(`     GitHub:`)}`,
  labelLinkedIn: `${chalk.hex(labelcolor).bold(`   LinkedIn:`)}`,
  labelWeb: `${chalk.hex(labelcolor).bold(`        Web:`)}`,
  labelCard: `${chalk.hex(labelcolor).bold(`       Card:`)}`,
  // Personal data section
  name: chalk.bold.green(`                   ${data.name}            `),
  handle: chalk.white(`@${data.dev}`),
  work: `${chalk.white(`Software Engineer at `)} ${chalk
    .hex(companynameColor)
    .bold(data.company)}`,
  twitter: `${chalk.grey(`https://twitter.com/`)} ${chalk.cyan(data.twitter)}`,
  github: `${chalk.gray(`https://github.com/`)} ${chalk.cyan(data.github)}`,
  linkedin: `${chalk.gray(`https://linkedin.com/in`)} ${chalk.cyan(
    data.linkedin
  )}`,
  web: `${chalk.cyan(data.web)}`,
  npx: `${chalk.red("npx")} ${chalk.white(data.npx)}`,
};

// creating boxer section start from here
const maindataArray = [
  // main section
  `${maindata.name}`,
  _emptyString,
  `${maindata.labelWork} ${maindata.work}`,
  _emptyString,
  `${maindata.labelTwitter} ${maindata.twitter}`,
  `${maindata.labelGitHub} ${maindata.github}`,
  `${maindata.labelLinkedIn} ${maindata.linkedin}`,
  `${maindata.labelWeb} ${maindata.web}`,
  _emptyString,
  `${maindata.labelCard} ${maindata.npx}`,
  _emptyString,
  // footer section
  `${chalk
    .hex(conditionColor)
    .italic(`if (${chalk.hex(_condition).italic(`employer`)}) {`)}`,
  `${chalk
    .hex(_content)
    .italic(`  yes, I'm always looking for great opportunities;`)}`,
  `${chalk.hex(conditionColor).italic(`}`)}`,
  `${chalk.hex(conditionColor).italic(`else {`)}`,
  `${chalk
    .hex(_content)
    .italic(`  Hi, I love to be friend with like minded people.`)}`,
  `${chalk
    .hex(_content)
    .italic(`  Message me, maybe we could help each other.`)}`,
  `${chalk.hex(conditionColor).italic(`}`)}`,
];
const renderData = boxen(maindataArray.join("\n"), {
  margin: 1,
  float: "center",
  padding: 1,
  borderStyle: "single",
  borderColor: boxColor,
});

module.exports = renderData;
