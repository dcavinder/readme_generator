const fs = require("fs");
const inquirer = require("inquirer");

const generateReadme = require("./generateReadme");

//checks to make sure the user entered some value
function validateInfo(value) {
    if (value != "") {
        return true;
    } else {
        return "Please fill in an answer. If the question does not apply type N/A"
    }
}

//user prompt questions
const prompts = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: validateInfo,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
        validate: validateInfo,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install your project.',
        validate: validateInfo,
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project.',
        validate: validateInfo,
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please describe how to contribute to your project.',
        validate: validateInfo,
    },
    {
        type: 'list',
        message: 'What type of License does your project use?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'Eclipse Public License 2.0', 'Mozilla', 'Boost Software 1.0'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter testing instructions.',
        validate: validateInfo,
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
        validate: validateInfo,
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?',
        validate: validateInfo,
    },
  ]

  //creates readme file and passes in user input
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateReadme(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function init() {
    inquirer.prompt(prompts).then((data) => {
        console.log(JSON.stringify(data, null, ' '));
        writeToFile('./new/README.md', data);
    });
}

init();