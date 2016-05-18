# yummy-time

[![Stories in Ready](https://badge.waffle.io/octocrux/yummy-time.svg?label=ready&title=Ready)](http://waffle.io/octocrux/yummy-time)

## Getting started

- Clone the repository:

  ```sh
  git clone git@github.com:octocrux/yummy-time.git
  ```

### Before you start

- Sensitive data like passwords or secret tokens is not stored in the repository,
so you'll have to make some preparations before the project can be launched.
Replace config variables in [envconfig.sh](devops/envconfig.sh) with correct
values and then source the file to your working environment:

  ```sh
  . ./devops/envconfig.sh
  ```

### Setup project

- Install node and bower dependencies:

  ```sh
  npm i
  ```

- Run mongod:

  ```sh
  mongod --dbpath path/to/your/mongo/dbs
  ```

- Launch server application:

  ```sh
  npm run server
  ```

- Launch client application:

  ```sh
  npm run client
  ```

- Open the application in your browser:

  ```sh
  open http://127.0.0.1:4200
  ```

- Build the application for different environments:

  ```sh
  npm run build       # => development
  ```

- Deploy application to Heroku:

  ```sh
  npm run deploy
  ```
