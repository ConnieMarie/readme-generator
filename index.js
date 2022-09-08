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
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing to your project.'
        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing your application.'
        
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache', 'GLP', 'ISC', 'BSD', 'Mozilla'],
        message: 'Select a license for your project.'
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


