// function that adds a license tag to the Table of contents if user selects a license
// if there is no license, return an empty string so that license tag is left out 
function renderLicenseTag(license) {
  if (license.license !== 'none') {
    return (`- [License](#license)`);
  } else {
    return '';
  }
};

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

// function to add note stating no installation is required when user leaves section blank
function renderNoInstallNote(installation) {
  if (installation.installation === '') {
    return `No installation required!`;
  } else {
    return `To install necessary dependencies, run command:\n
    ${installation.installation}`;
  }
};

// function to add note stating no tests are available when user leaves section blank
function renderNoTestsNote(tests) {
  if (tests.tests === '') {
    return `No tests are available at this time.`;
  } else {
    return `Instructions to run tests on this application:\n
    ${tests.tests}`;
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
  ${renderLicenseTag(data)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${renderNoInstallNote(data)}

  ## Usage
  Instructions for use ${data.title}:\n
  ${data.usage}

  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ## Contributing
  Guidelines to contribute to this project:\n
  ${data.contributing}

  ## Tests
  ${renderNoTestsNote(data)}

  ## Questions
  For any additional questions, you may reach me at [${data.email}](mailto:${data.email}).\n
  To view my other work, please visit my GitHub profile at [${data.username}](https://www.github.com/${data.username}). 

`;
};


module.exports = generateMarkdown;
