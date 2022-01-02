#!/usr/bin/env node

"use strict";

// importing dependencies
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");
clear();

const prompt = inquirer.createPromptModule();

const personalData = {
  npx: "hariom",
  handle: "hariomgola",
  name: "Hariom Gola",
  twitter: "hariomgola09",
  github: "hariomgola",
  linkedin: "hariomgola",
  company: "Accenture",
  web: "https://hariomgola.github.io/",
};
const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:hariyt.kumar@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
        value: () => {
          console.log("\n Resume building will release in later version");
          /*
          const loader = ora({
            text: " Downloading Resume",
            spinner: cliSpinners.material,
          }).start();
          let pipe = request("https://resume-url").pipe(
            fs.createWriteStream("./hariom-kumar.html")
          );
          pipe.on("finish", function () {
            let downloadPath = path.join(process.cwd(), "hariom-kumar.html");
            console.log(`\nResume Downloaded at ${downloadPath} \n`);
            open(downloadPath);
            loader.stop();
          });
          */
        },
      },
      {
        name: "Check github profile",
        value: () => {
          open("https://github.com/hariomgola");
          console.log("\nDone, see you in the browser. \n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("\nTe veo pronto  :).");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green(`                  ${personalData.name}          `),
  handle: chalk.white(`@${personalData.handle}`),
  work: `${chalk.white("Software Engineer at")} ${chalk
    .hex("#ffe000")
    .bold(`${personalData.company}`)}`,
  twitter:
    chalk.gray("https://twitter.com/") + chalk.cyan(`${personalData.twitter}`),
  github:
    chalk.gray("https://github.com/") + chalk.green(`${personalData.github}`),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue(`${personalData.linkedin}`),
  web: chalk.cyan(`${personalData.web}`),
  npx: chalk.red("npx") + " " + chalk.white(`${personalData.npx}`),

  labelWork: chalk.hex("#ffe000").bold("       Work:"),
  labelTwitter: chalk.hex("#ffe000").bold("    Twitter:"),
  labelGitHub: chalk.hex("#ffe000").bold("     GitHub:"),
  labelLinkedIn: chalk.hex("#ffe000").bold("   LinkedIn:"),
  labelWeb: chalk.hex("#ffe000").bold("        Web:"),
  labelCard: chalk.hex("#ffe000").bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk
      .hex("#7f7fd5")
      .italic(`if (${chalk.hex("#f2994a").italic("employer")}) {`)}`,
    `${chalk
      .hex("#7f7fd5")
      .italic(
        `  ${chalk
          .hex("#d3cce3")
          .italic("yes, I'm always looking for great opportunities;")}`
      )}`,
    `${chalk.hex("#7f7fd5").italic(`}`)}`,
    `${chalk
      .hex("#7f7fd5")
      .italic(`else if (${chalk.hex("#f2994a").italic("want a website")}) {`)}`,
    `${chalk
      .hex("#7f7fd5")
      .italic(
        `  ${chalk
          .hex("#d3cce3")
          .italic("ping me ! lets discuss how will I help you;")}`
      )}`,
    `${chalk.hex("#7f7fd5").italic(`}`)}`,
    `${chalk
      .hex("#7f7fd5")
      .italic(`else if (${chalk.hex("#f2994a").italic("geek")}) {`)}`,
    `${chalk
      .hex("#7f7fd5")
      .italic(
        `  ${chalk
          .hex("#d3cce3")
          .italic("hi, I love to be friends with like minded people.")}`
      )}`,
    `${chalk
      .hex("#7f7fd5")
      .italic(
        `  ${chalk
          .hex("#d3cce3")
          .italic("Message me, maybe we could help each other.")}`
      )}`,
    `${chalk.hex("#7f7fd5").italic(`}`)}`,
    `${chalk.hex("#7f7fd5").italic(`else {`)}`,
    `${chalk
      .hex("#7f7fd5")
      .italic(
        `  ${chalk.hex("#d3cce3").italic("goto: hariomgola.github.io/404")}`
      )}`,
    `${chalk.hex("#7f7fd5").italic(`}`)}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "#f2994a",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
