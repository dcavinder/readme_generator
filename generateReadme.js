//this function formats the readme file
function generateReadme(data) {
    return `
# Project Title
${data.title}
# Description
${data.description}
# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-License)
* [How To Contribute](#-How-To-Contribute)
* [Tests](#-Tests)
* [Questions](#-Questions)
    
# Installation
${data.installation}
# Usage
${data.usage}
# License 
${data.license} 
# How to Contribute
${data.contribution}
# Tests
${data.tests}
# Questions 
* Contact Email: ${data.email}
* GitHub: github.com/${data.github}
`;
}

module.exports = generateReadme;