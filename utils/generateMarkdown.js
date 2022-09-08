// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


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
  ${data.insallation}

  ## Usage
  Instructions for use:
  ${data.usage}

  ## License
  ${data.lincense}

  ## Contributing
  Guidelines to contribute to this project:
  ${data.contributing}

  ## Tests
  To test this application:
  ${data.tests}

  ## Questions
  For any additional questions, you may reach me at ${data.email}
  To view my other work, please visit my GitHub profile at ${data.username} 
  

`;
}

module.exports = generateMarkdown;
