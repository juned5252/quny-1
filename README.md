# Friendly Stuff 

[![Build Status](https://travis-ci.org/robinsoncol/friendly-stuff.svg?branch=master)](https://travis-ci.org/robinsoncol/friendly-stuff) [![Coverage Status](https://coveralls.io/repos/github/robinsoncol/friendly-stuff/badge.svg)](https://coveralls.io/github/robinsoncol/friendly-stuff)

A website to manage the selling/sharing of personal items, across multiple social media platforms.

## Running The App

Make sure [Node.js](https://nodejs.org/en/) and [PostgresSQL](https://www.postgresql.org/) are installed.

Set up the app for development by setting the environmental variables:

  ```shell
  export NODE_ENV=development
  
  # Create a database for development and set its connection string to FSD_CONN_STR:
  export FSD_CONN_STR=postgres://username:password@localhost:5432/database_name
  ```

Create a database for development and set the enviromental variable `FSD_CONN_STR` to the database's connection string.

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

## Running The Tests

Set up the app for testing by setting the environmental variables:

  ```shell
  export NODE_ENV=test
  
  # Create a database for testing and set its connection string to FST_CONN_STR:
  export FST_CONN_STR=postgres://username:password@localhost:5432/database_name
  ```

Run unit tests using [Mocha](https://mochajs.org/):

  ```shell
  gulp test
  ```

Run end-to-end tests using [Nightwatch](http://nightwatchjs.org/):

  ```shell
  gulp e2e:drivers
  gulp e2e
  ```
