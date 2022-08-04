// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project? ',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a brief description of your project: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project? ',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed. ',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'List your collaborators, if any: ',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'Provide test instructions of your project if you have any: ',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'List the appropriate license for your project: ',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Does your project include any features?',
    name: 'features',
  },
  {
    type: 'input',
    message: 'List your email:',
    name: 'features',
  },
];

// TODO: Create a function to write README file
function readMe() {

  inquirer
  .prompt(questions)
  .then((data) => {
    const generateFile = generateMarkdown(data);
    
    fs.writeFile('./README.md', generateFile, (err) => err ? console.log(err) : console.log('Successfully created ReadMe.md'));
  })
}

readMe();
