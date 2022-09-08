// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else { 
              console.log('Please enter your GitHub username!');
              return false;
            }
          } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else { 
              console.log('Please enter your email address!');
              return false;
            }
          } 
        
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else { 
              console.log('Please enter your project title!');
              return false;
            }
          } 
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else { 
              console.log('Please enter your project description!');
              return false;
            }
          } 
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions, if any.'
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide intructions on the usage of your application.'
        
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'Unlicense', 'ISC', 'Zlib', 'none'],
      message: 'Select a license for your project.'
      
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing to your project.'
        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing your application.'
        
    },
    
];

// const license = [
//   {
//     name: 'MIT',
//     badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
//     link: 'https://opensource.org/licenses/MIT'
//   },
//   {
//     name: 'Apache',
//     badge: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
//     link: 'https://opensource.org/licenses/Apache-2.0'
//   },
//   {
//     name: 'ISC',
//     badge: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
//     link: 'https://opensource.org/licenses/ISC'
//   },
//   {
//     name: 'MPL 2.0',
//     badge: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
//     link: 'https://opensource.org/licenses/MPL-2.0'
//   }
   
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let fileContent = generateMarkdown(data);
    fs.writeFile(fileName, fileContent, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log('ReadME.md generated!')
    });
  };

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (data) {
    let fileName = 'README.md';
    writeToFile(fileName, data)
  });
};

// Function call to initialize app
init();


