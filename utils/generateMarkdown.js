// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.licence != 'none') {
    return (`[![License: Unlicense](https://img.shields.io/badge/license-${license.license}-blue.svg)](#license)`);
  } else {
    return ('');
  }
};

// USE THIS FOR BADGES..... https://img.shields.io/badge/badge-stuff-yellow
//   https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.licence != 'none') {
    return (data.license.link);
  } else {
    return ('');
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#quesitons)

  ## Insallation
  To install necessary dependencies, run command:
  ${data.installation}

  ## Usage
  Instructions for use ${data.title}:
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  Guidelines to contribute to this project:
  ${data.contributing}

  ## Tests
  To test this application:
  ${data.tests}

  ## Questions
  For any additional questions, you may reach me at [${data.email}](mailto:${data.emal}).
  To view my other work, please visit my GitHub profile at [${data.username}](https://www.github.com/${data.username}). 

`;
}


module.exports = generateMarkdown;
