const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./generateREADME');

questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        default: 'New Project'
    },
    // Description
    {
        type: 'input',
        name: 'descMain',
        message: 'What does this project do?',
        default: '',
    },
    {
        type: 'input',
        name: 'descMotivation',
        message: 'What was your motivation?',
        default: '',
    },
    {
        type: 'input',
        name: 'descPurpose',
        message: 'Why did you build this project?',
        default: '',
    },
    {
        type: 'input',
        name: 'descProblemSolved',
        message: 'What problem does it solve?',
        default: '',
    },
    {
        type: 'input',
        name: 'descLearn',
        message: 'What did you learn?',
        default: '',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How does the user use this project?',
        default: '',
    },
    // Credits
    {
        type: 'confirm',
        name: 'creditsConfirmColab',
        message: 'Did anyone colaborate?',
    },
    {
        type: 'input',
        name: 'creditsColabName',
        when: (answers) => answers.creditsConfirmColab === true,
        message: 'What is the name of your collaborator?',
    },
    {
        type: 'input',
        name: 'creditsColabGithub',
        when: (answers) => answers.creditsConfirmColab === true,
        message: 'What is the GitHub link of your collaborator?',
    },
    // License
    {
        type: 'confirm',
        name: 'licenseConfirmColab',
        message: 'Do you have a license?',
    },
    {
        type: 'input',
        name: 'licenseCopy',
        when: (answers) => answers.licenseConfirmColab === true,
        message: 'Paste the license text here:',
    },
  ];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log('Success!'))
};

function init() {
    inquirer.prompt(questions)
        .then(function(answers) {
            writeToFile('README.md', generateREADME(answers));
        })
}



init();