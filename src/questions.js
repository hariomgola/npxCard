#!/usr/bin/env node

"use strict";

// importing libraries for making request for resume
const chalk = require("chalk");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");

// Creating console Question
const question = [
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
          const loader = ora({
            text: " Downloading Resume",
            spinner: cliSpinners.material,
          }).start();
          let pipe = request("https://hariomgola.github.io/resume/").pipe(
            fs.createWriteStream("./hariom-kumar.html")
          );
          pipe.on("finish", function () {
            let downloadPath = path.join(process.cwd(), "hariom-kumar.html");
            console.log(`\nResume Downloaded at ${downloadPath} \n`);
            open(downloadPath);
            loader.stop();
          });
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

// printing tips before printing question
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

module.exports = question;
