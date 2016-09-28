# Friendly Stuff [![Build Status](https://travis-ci.org/robinsoncol/friendly-stuff.svg?branch=master)](https://travis-ci.org/robinsoncol/friendly-stuff) [![Coverage Status](https://coveralls.io/repos/github/robinsoncol/friendly-stuff/badge.svg)](https://coveralls.io/github/robinsoncol/friendly-stuff)

A website to manage the selling/sharing of personal items, across multiple social media platform.

## Development

Make sure [NodeJS](https://nodejs.org/en/) is installed.

Download dependencies:

  ```
  npm install
  ```

To Run the app:

  ```
  gulp watch
  ```

Browse to `http://localhost:3001/`.
> Note, making changes to certain files, triggers a full browser refresh.

## Tests

To run unit tests using [Mocha](https://mochajs.org/):

  ```
  gulp test
  ```

To run end-to-end tests using [Nightwatch](http://nightwatchjs.org/):

  ```
  gulp e2e:drivers
  gulp e2e
  ```
