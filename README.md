## Deere Project 4 - BACKEND 
## Overview
Project 4 is a fullstack aplication consiting of a Express/Node.js Backend (BE) and a React-App Frontend (FE).  

Starter code supplied with project prompt is at very bottom of this README.md.

This README.md is for the BACKEND poriton.

## App Description:
App is Flashcard 2.0 which is built off of Project 1 Flashcard 1.0.  1.0 was only a frontend app.  2.0 adds a backend to store flashcard decks, permanently keep user/student scores and progress, etc.

So what is "Flashcard x.0"?  It is intended as an educational game/tool that can be played by even very young children.  1.0 used keyboard only to 'play' the deck.  This avoided difficulties that young users may have with controlling a mouse.  2.0 adds the backend allowing decks to be added.  

What is future for Flashcard?  Version 3.0 will include 1.0 game play refactored from basic JS to JavaScript React.  Additionally, v3.0 will have ability for a non-IT parent/home-educator to load up a custom deck to BE.  Finally, v3.0 will need to have authentication added for user/player privacy, etc.

## Note: INITIAL_PLANNING.md is in this BACKEND repo and contains initial planning file that was approved for entire project and covers initial planing for both FE & BE.

## Github repo links
FE https://github.com/dg02701/project4_frontend
BE https://github.com/dg02701/deere-project4-express-api-starter

## Heroku app links
FE - https://flashcard2-frontend.herokuapp.com/
BE - https://flashcard2-backend.herokuapp.com/

## ERD for Backend
In repo 'planning' folder @ FE Github repo (above)
and at relative path planning/Project_4_ERD.drawio.pdf

## List of Technologies Used in Backend
Express
Node.js
Sequelize
Postman
PostgreSQL 12
pgAdmin 4





## ****Starter Code from GA project prompt****
## ****from GA staff****
This app serves JSON data only. There are no views. You'll build a React app to communicate with this Express app. Since there are no views, you'll want to use Postman to test that your endpoints are working before writing the React code.

Note - this app has no views and each endpoint is prefaced with `/api`.

```js
// server.js
app.use("/api/auth", require("./controllers/authController.js"));
app.use("/api/users", require("./controllers/usersController.js"));
```

## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=pancakes
   ```

1. Check out your `config/config.json` file. You'll need to create a database called `project4_development` (or feel free to rename the database) in pgAdmin or from any directory in the Terminal:

   ```
   createdb project4_development
   ```

1. Sequelize is included in the app. You have a `User` model. Run `npx sequelize db:migrate` to create the `Users` table in your database.

1. Run `nodemon`.
1. Open Postman to confirm that your app is working on `localhost:3000/`.

![](https://i.imgur.com/VEkRBk9.png)

<br>

## Routes

You have the following routes available.

#### `server.js`

- GET `localhost:3000/`

#### `controllers/authController.js`

- POST `localhost:3000/api/auth/signup`
- POST `localhost:3000/api/auth/login`
- GET `localhost:3000/api/auth/logout`

#### `controllers/usersController.js`

- GET `localhost:3000/api/users/profile/:id`

<br>

## To Deploy

- [Heroku Node Express Deployment](https://git.generalassemb.ly/jdr-0622/node-express-heroku-deployment)
- [Heroku React Deployment](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes)
- [Project 4 Starter Code Heroku Deployment Link](https://deere-project4-express.herokuapp.com/)

  ![](https://i.imgur.com/hy2jymA.png)

<br>

## Additional Resources

- [Sequelize Docs](https://sequelize.org/master/)
- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)
