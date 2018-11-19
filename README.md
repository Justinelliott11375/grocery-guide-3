# Grocery Guide!

> An MERN stack application for keeping track of a grocery list  
> This app was built over the course of one week and still has some bugs and missing functionality. List items can be created and deleted, but not updated(changing an existing item without creating a new one). Users can be created and authenticated upon login but the app does not yet render only the items associated with that user. Form validations are implemented but do not yet render in react for the user to see(these validation errors are sent as responses and can be viewed in the console though). Tests are being written but are not currently included in this repo.



## Installation

- This app requires node(it is built with v9.6.1).  
- This app requires the following packages in the front end(react) package.json:   
    axios: version 0.18.0,
    bootstrap: version 4.1.3,
    classnames: version 2.2.6,
    jwt-decode: version 2.2.0,
    prop-types: version 15.6.2,
    react: version 16.6.3,
    react-dom: version 16.6.3,
    react-redux: version 5.1.1,
    react-router: version 4.3.1,
    react-router-dom: version 4.3.1,
    react-scripts: version 2.1.1,
    react-transition-group: version 2.5.0,
    reactstrap: version 6.5.0,
    redux: version 4.0.1,
    redux-thunk: version 2.3.0,
    uuid": version 3.3.2
### Clone

- Clone this repo to your local machine using `https://github.com/Justinelliott11375/grocery-guide-3/`

### Setup

- After cloning the repo, in the app's root directory run `npm install` to install server-side dependencies.
- Then run `npm run client-install` to install client-side dependencies.
- Next create a file in the root directory call `.env` and add the following lines to it:

- To run/test the app, create a .env file in the main directory and add the following line to it:  
cookieSecret="SECRET1"
Run `npm start` in the command line and the server should start at address `localhost:3000`

## Features

- creating a user account  
- Signing in as an existing user
- creating a recipe list 
- creating recipe cards for recipe lists
- editing/updating/deleting recipe cards and/or lists
- signing out of the user account

## Tests (Optional)

- This app uses jasmine test suites for testing. With jasmine installed you can run all tests from the command line with `npm test`

## Technologies

- JavaScript(ES6), node, npm, postgres

---

## Author

> Justin Elliott
