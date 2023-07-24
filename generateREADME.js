const generateSection = require('./modules/generateSection');
const generateSectionWithItem = require('./modules/generateSectionWithItem');
// const generateItem = require('./modules/generateItem');


function  generateREADME(data) {
    return `# ${data.projectName}

## Description 

---

${data.descMain} ${data.descMotivation} ${data.descPurpose} ${data.descProblemSolved} ${data.descLearn}

## Table of Contents

---

- [Usage](#usage)
${generateTableOfContents('Credits', generateSectionWithVariables('Credits', data.creditsConfirmColab))}
${generateTableOfContents('License', generateSection('License', data.licenseCopy))}
        
## Usage 

---
    
${data.usage}
    
${generateCredits('Credits', data.confirm, data.creditsColabName, data.creditsColabGithub)}
    
${generateSection('License', data.licenseCopy)}
`
};

module.exports = generateREADME

function generateTableOfContents(title, response) {
    if (response === '') {
        return '';
    } else {
        return `- [${title}](#${toLowerCase(title)})`;
    }
}

///////////////////////////////////////////////////////

// function generateSectionWithItem(title, content) {
//     if(!content || content == '') {
//         return '';
//     }
//     else {
//         return `${title}
// ---

// ${generateCredits(data.confirm)}
// `
// }

// }












///////////////////////////////////////////////////////

function generateCredits(title, confirm, name, github) {
    if (confirm) {
        return `## ${title}

        ---

        ${name} | ${github}`
    } else {
        return '';
    }
}

// This is how I used to make the Credits
// ${generateSection('Credits', data.creditsConfirmColab)}




