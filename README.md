# Grocery Guide!

> An MERN stack application for keeping track of a grocery list  
> This app was built over the course of one week and still has some bugs and missing functionality. List items can be created and deleted, but not updated(changing an existing item without creating a new one). Users can be created and authenticated upon login but the app does not yet render only the items associated with that user. Form validations are implemented but do not yet render in react for the user to see(these validation errors are sent as responses and can be viewed in the console though). Tests are being written but are not currently included in this repo.



## Installation

- This app requires node(it is built with v9.6.1).  
- This app requires the following packages in the front end(react) package.json:   
    - axios: version 0.18.0,
    - bootstrap: version 4.1.3,
    - classnames: version 2.2.6,
    - jwt-decode: version 2.2.0,
    - prop-types: version 15.6.2,
    - react: version 16.6.3,
    - react-dom: version 16.6.3,
    - react-redux: version 5.1.1,
    - react-router: version 4.3.1,
    - react-router-dom: version 4.3.1,
    - react-scripts: version 2.1.1,
    - react-transition-group: version 2.5.0,
    - reactstrap: version 6.5.0,
    - redux: version 4.0.1,
    - redux-thunk: version 2.3.0,
    - uuid": version 3.3.2
- This app requires the following packages in the back end(node) package.json(note: nodemon is included as a devdependency for live reloading but is not necesary):
    bcrypt: version 3.0.2
    body-parser: version 1.18.3
    concurrently: version 4.0.1
    dotenv: version 6.1.0
    express: version 4.16.4
    jsonwebtoken: version 8.4.0
    mongoose: version 5.3.12
    passport: version 0.4.0
    passport-jwt: version 4.0.0
    uuid: version 3.3.2
    validator: version 10.9.0
    nodemon: version 1.18.6
  }
### Clone

- Clone this repo to your local machine using `https://github.com/Justinelliott11375/grocery-guide-3/`

### Setup

- After cloning the repo, in the app's root directory run `npm install` to install server-side dependencies.
- Then run `npm run client-install` to install client-side dependencies.
- Next create a file in the root directory called `.env` and add the following line to it:
    `SECRET_OR_KEY="webTokenKey"`
- To run only the client side(react) app, use `npm run client`(this runs on port 3000)
- To run only the server side(node) app, use `npm run server`(this runs on port 5000)
- To run both apps/servers concurrently, use `npm run dev`(this runs on ports 3000 and 5000 with proxy)


## Features

- creating a user account  
- Signing in as an existing user
- adding items to grocery list 
- removing items from grocery list

## Tests (Optional)

- This app uses jasmine test suites for testing. With jasmine installed you can run all tests from the command line with `npm test`

## Technologies

- JavaScript(ES6), node, react, mongoDB, jasmine

---

## Author

> Justin Elliott
