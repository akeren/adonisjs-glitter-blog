# Glitter blog built with AdonisJS :heart:

This is a blog application built using AdonisJs `4.1`. I took it upon myself to explore the `AdonisJS` this week by getting my hands dirty with it.

### System Requirement

The only dependencies of the framework are `Node.js` and `npm`. Ensure your versions of those tools match the following criteria:

- Node.js >= 8.0.0
- npm >= 3.0.0
- git

### Installing AdonisJS

Install it globally via npm like so:

```shell
    npm i -g @adonisjs/cli
```

If you're using `Linux` or `Mac` use this command below in other to gain administrator privileges:

```shell
    sudo npm i -g @adonisjs/cli
```

### Setup

Clone the repo and then run the command below to install all the dependencies:

```shell
    npm install
```

### Create .env file

- Create a `.env` file inside the root directory of the application and copy the contents in `.env.example` into it and update your configuration settings respectively.

#### Generate application

Generate application key. To do that run the command below :point_down:

```shell script
    adonis key:generate
```

### Migrations

Run `migrations` below:

```js
    adonis migration:run
```

### Start the server

Run the command below to start the `server`

```shell
    adonis serve
```

- Launch your browser and access the project

_Enjoy!_ :heart:
