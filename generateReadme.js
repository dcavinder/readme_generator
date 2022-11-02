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
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
    
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