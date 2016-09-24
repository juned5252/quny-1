# Friendly Stuff

A website to manage the selling/sharing of personal items, across multiple social media platform.

## Running The App

1) Make sure [NodeJS](https://nodejs.org/en/) is installed.

2) From your project folder, run the following command to install project dependencies:

  ```shell
  npm install
  ```

3) To run the app:

  ```shell
  gulp watch
  ```

4) Browse to `http://localhost:3001/`.
> Note, making changes to certain source files triggers a full browser refresh.

5) To run unit test using (Mocha)[]:

    ```shell
  gulp test
  ```

5) To run end-to-end using (Nightwatch)[]:

  ```shell
  gulp e2e:drivers
  gulp e2e
  ```
