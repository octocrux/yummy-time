# YummyTime

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
  . ./devops/envconfig.sh # Don't miss out the dot, it's a vital part :)
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
  open http://127.0.0.1:4200 # localhost won't work
  ```

- Build the application for different environments:

  ```sh
  npm run build # development
  ```

- Deploy application to Heroku:

  ```sh
  npm run deploy
  ```

## Integrate Slack with https://yum-time.herokuapp.com

- If you participate in any Slack team and have permissions to add
custom integrations to the team, you can setup `Yummy` Webhook and `/yummy` command
to be able to retrieve data from YummyTime application.

### Setup `yummy` webhook

- Navigate to your team App directory: **`your-team-name`** -> `Apps & Integrations`  
or input `https://your-team-name.slack.com/apps` in the address bar

- Select `Build`, then `Make a custom integration`

- Choose `Incoming WebHooks`, select a channel you want to recieve messages to and
press `Add incoming Webhooks integration` button

- You can then make some changes to the settings, like choosing an icon
for Webhook bot. All we are going to need is a WebhookURL generated by Slack

- Navigate to `https://yum-time.herokuapp.com` and register a new user or login using an existing Google account

- In the menu, choose `Settings`. Copy generated WebhookURL to the respective field
and save the user. Here you can also choose the channel you want to post messages to

- From now on, when you create a new order, a notification will be sent to your team

### Setup `/yummy` command

- Navigate to your team App directory **`your-team-name`** -> `Apps & Integrations`  
or input `https://your-team-name.slack.com/apps` in the address bar

- Select `Build`, then `Make a custom integration`

- Choose `Slash Commands`, input command name **/yummy** and press `Add Slash Command Integration` button

- The only thing you need to change is to set the `URL` option to  
`https://yum-server.herokuapp.com/yummy`

- From now on, you can use `/yummy` slash command to receive information about new orders
