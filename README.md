[![Build Status](https://travis-ci.org/robinsoncol/friendly-stuff.svg?branch=master)](https://travis-ci.org/robinsoncol/friendly-stuff)
[![Coverage Status](https://coveralls.io/repos/github/robinsoncol/friendly-stuff/badge.svg)](https://coveralls.io/github/robinsoncol/friendly-stuff)

# Friendly Stuff

A website to manage the selling/sharing of personal items, across multiple social media platform.

## Running The App

1) Make sure [NodeJS](https://nodejs.org/en/) is installed.

2) Download dependencies

  ```
  npm install
  ```

3) Run the app:

  ```
  gulp watch
  ```

4) Browse to `http://localhost:3001/`.
> Note, making changes to certain source files triggers a full browser refresh.

5) Run unit test using [Mocha](https://mochajs.org/):

  ```
  gulp test
  ```

5) Run end-to-end using [Nightwatch](http://nightwatchjs.org/):

  ```
  gulp e2e:drivers
  gulp e2e
  ```
