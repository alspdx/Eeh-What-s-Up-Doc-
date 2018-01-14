# Eeh, What's Up Doc?

#### An application to help users connect with doctors _2018_

#### by **Adam Smith**

## Description

This application will allow users to input a medical issue and get a list of doctors that provide needed services. The user can input a location of Seattle or Portland, a condition, a doctor's name, or any combination of these options. The application will return a list of doctors with their names, practice address, phone number, and if it is available, a website.

## Setup

  1. Open Terminal or Command Line.
  2. Change directories to where you would like to clone the files.
  3. Run
  `$ git clone https://github.com/alspdx/Eeh-What-s-Up-Doc-.git`.
  4. Change directories to the eeh-whats-up-doc directory.
  5. Run the following in the command line:
  ```
  $ npm install
  $ bower install
  $ gulp build
  $ gulp serve
  ```
## API Authorization

  1. Visit the [BetterDoctor API](https://developer.betterdoctor.com/) website.
  2. Sign up for a free account and sign in.
  3. Navigate to the "My Account" tab in the navigation bar and click the "Applications" link.
  4. Click the "Create New App" button and get a new API authorization key.
  5. Create a new file in the top level of the project with the name ".env".
  6. Finally add the following export statement to the file with your API key in the quotes. The key is already linked to an import statement in the application files so no other steps are necessary.

    `exports.apiKey = "--yourApiKeyHere--";`

## Technologies Used:
* JavaScript
* jQuery
* Node.js
* NPM
* Bower
* Gulp
* Babel
* Jasmine
* Karma
* BetterDoctor API

## License

Copyright (c) 2018, Adam Smith.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
