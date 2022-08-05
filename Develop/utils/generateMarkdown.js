// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseKey = {};

  if (license === 'Apache') {
    licenseKey = {
      badgeKey: 'Apache%202.0-blue.svg',
      linkKey: 'Apache-2.0',
    }
  }
  else if (license === 'Eclipse') {
    licenseKey = {
      badgeKey: 'EPL%201.0-red.svg',
      linkKey: 'EPL-1.0',
    }
  }
  else if (license === 'GNU GPL v3') {
    licenseKey = {
      badgeKey: 'GPL%20v3-blue.svg',
      linkKey: 'gpl-3.0',
    }
  }
  else if (license === 'IBM') {
    licenseKey = {
      badgeKey: 'IPL%201.0-blue.svg',
      linkKey: 'IPL-1.0',
    }
  }
  else if (license === 'Mozilla') {
    licenseKey = {
      badgeKey: 'MPL%202.0-brightgreen.svg',
      linkKey: 'MPL-2.0',
    }
  }

  return licenseKey;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '') {
    return; 
  }

  const licenseKey = renderLicenseBadge(license);
  return `[![License](https://img.shields.io/badge/License-${licenseKey.badgeKey})](https://opensource.org/licenses/${licenseKey.linkKey})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license === '') {
    return;

}
const licenseSection = `This application is covered by the **${license}** license.`;

  return licenseSection;
}

function generateMarkdown(data) {

  const readmeInfo = `

  # ${data.title}
  ${renderLicenseBadgeLink(data.license)}
  
  ## Table of Contents
  - [**Description**](#description)
  - [**Installation**](#installation)
  - [**Usage**](#usage)
  - [**Contributors**](#contributors)
  - [**Tests**](#tests)
  - [**License**](#license)
  - [**Questions**](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation} 
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.instructions}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any questions please feel free to contact me!  
  - My **Github** Link: [**${data.github}**](https://github.com/${data.github})  
  - My **Email**: **${data.email}**
  `;
  
    return readmeInfo;
  }
  
  module.exports = generateMarkdown;
  