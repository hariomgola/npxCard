#!/usr/bin/env node

"use strict";

// importing dependencies
const inquirer = require("inquirer");
const clear = require("clear");
clear();

const prompt = inquirer.createPromptModule();

// importing modules from other file functionality
const renderData = require("./data");
console.log(renderData);

// Question section
const question = require("./questions");
prompt(question).then((answer) => answer.action());
