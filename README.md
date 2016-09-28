# Friendly Stuff 

[![Build Status](https://travis-ci.org/robinsoncol/friendly-stuff.svg?branch=master)](https://travis-ci.org/robinsoncol/friendly-stuff) [![Coverage Status](https://coveralls.io/repos/github/robinsoncol/friendly-stuff/badge.svg)](https://coveralls.io/github/robinsoncol/friendly-stuff)

A website to manage the selling/sharing of personal items, across multiple social media platforms.

## Running The App

Make sure [NodeJS](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/) are installed.

By default, the app assume that you want to run it in development mode, but you can explicitally set the environmental variable: `NODE_ENV=development`.

Create a database for development and set the enviromental variable `FSD_CONN_STR` to the database's connection string.

Download project dependencies:

  ```ssh
  npm install
  ```

Run the app:

  ```ssh
  gulp watch
  ```

Browse to `http://localhost:3001/`.
> Note, making changes to certain files, triggers a full browser refresh.

## Running The Tests

Set the enviromental variable: `NODE_ENV=test`.

Create a database for testing and set the enviromental variable `FST_CONN_STR` to the testing database's connection string.

Run unit tests using [Mocha](https://mochajs.org/):

  ```ssh
  gulp test
  ```

Run end-to-end tests using [Nightwatch](http://nightwatchjs.org/):

  ```ssh
  gulp e2e:drivers
  gulp e2e
  ```
