# Quny

[![Build Status](https://travis-ci.org/robinsoncol/friendly-stuff.svg?branch=master)](https://travis-ci.org/robinsoncol/friendly-stuff)

### Running The App

Make sure [Node.js](https://nodejs.org/en/) and [PostgresSQL](https://www.postgresql.org/) are installed.

For development, set the following environmental variables:

  ```shell
  export NODE_ENV=development

  # Create a database for development and set its connection string to FSD_CONN_STR:
  export FSD_CONN_STR=postgres://username:password@localhost:5432/database_name
  ```

Download project dependencies:

  ```shell
  npm install
  ```

Run the app:

  ```ssh
  gulp watch
  ```

Browse to `http://localhost:3001/`.
> Note, making changes to certain files, triggers a full browser refresh.


### Running The Tests

For testing, set the following environmental variables:

  ```shell
  export NODE_ENV=test
  
  # Create a database for testing and set its connection string to FST_CONN_STR:
  export FST_CONN_STR=postgres://username:password@localhost:5432/database_name
  ```

Run unit tests using [Mocha](https://mochajs.org/):

  ```shell
  gulp test
  ```
