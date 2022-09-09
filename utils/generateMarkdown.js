// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license !== 'none') {
    return (`[![License: ${license.license}](https://img.shields.io/badge/license-${license.license}-blue.svg)](#license)`);
  } else {
    return '';
  }
};


// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.license != 'none') {
    return `https://opensource.org/licenses/${license.license}`;
  } else {
    return '';
  }
};

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.license != 'none') {
    return (`## License
    This application is covered under ${license.license}. To read view documentation about this license, please visit the link below.`);
  } else {
    return '';
  }
};

// function to generate markdown for README
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
  - [Questions](#questions)

  ## Installation
  To install necessary dependencies, run command:
  ${data.installation}

  ## Usage
  Instructions for use ${data.title}:
  ${data.usage}

  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ## Contributing
  Guidelines to contribute to this project:
  ${data.contributing}

  ## Tests
  Instructions to run tests on this application:
  ${data.tests}

  ## Questions
  For any additional questions, you may reach me at [${data.email}](mailto:${data.email}).
  To view my other work, please visit my GitHub profile at [${data.username}](https://www.github.com/${data.username}). 

`;
};


module.exports = generateMarkdown;
