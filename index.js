const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    // Description
    {
        type: 'input',
        name: 'descMain',
        message: 'What does this project do?',
    },
    {
        type: 'input',
        name: 'descMotivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'descPurpose',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'descProblemSolved',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'descLearn',
        message: 'What did you learn?',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How does the user use this project?',
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
        message: 'What is the names of your collaborator?',
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
  ])
  .then( () => {
    console.log("\x1b[32m",'Success! Check out your new README');

    //output to a file
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => 
    err ? console.log(err) : console.log('Data has been saved')
    );
  });