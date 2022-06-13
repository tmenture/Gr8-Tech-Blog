# Gr8-Tech-Blog

## Purpose:
This is a blog website for anything tech. A user can create an account to gain access to a dashboard where they can post about tech,
leave comments on other users posts, edit previouslly made posts, and delete posts. A user that is not logged in may only view the homepage 
and search through existiing posts, they cannot post themselves, or leave comments. Once a user is done they can logout and go about there day,
and once they return, and log back in, they are presented with all their posts and can navigate freely throug the site.

## Installation / How To Use:
* If you do not already have it installed, install node.js (Here is the link to the download: https://nodejs.org/en/download/)
* Clone this repository to your machine (& switch to the directory you just created)
* Run npm i in your console to install necessary packages to run databse
* Create a .env file; add these three variables DB_NAME='ecommerce_db' DB_USER='your mysql username' DB_PW='your mysql password', 
    and save to create the connection. (Dont forget to add the .env file to the .gitignore file so you do not post your credentials anywhere)
* From here you can use the pre created seeds or alter them to include your test info
* Once satisfied with the seeds run node server.js to create and start the database
* Then use ctrl C (on windows) to exit the server; back in console run node seeds to upload your test info to the database
* Run node server.js once more in the console and your database will be up and running filled with all your data

## Link to Deployed Heroku:


## Built With:
* Node.js
    - Packages:
        - bcrypt
        - connect-session-sequelize
        - dotenv
        - express
        - express-handlebars,
        - express-session
        - jest
        - mysql2
        - path
        - sequelize
* Javascript
* SQL

## Made By:
### Thomas Menture
- Contact at: thomasoxemail@gmail.com
