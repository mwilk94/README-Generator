const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions
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
    message: 'What will your project be used for? ',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'List your contributors, if any: ',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'Provide test instructions of your project : ',
    name: 'instructions',
  },
  {
    type: 'list',
    message: 'Select the  license used for your project: ',
    name: 'license',
    selection: ['Apache', 'Eclipse', 'GNU GPL v3', 'IBM', 'Mozilla', 'None'],
  },
  {
    type: 'input',
    message: 'What is your GitHub username? ',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address? ',
    name: 'email',
  },
  
];
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
      if (err)
          throw err;
      console.log('Your README has been successfully created!')
  });
};

//Function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();

