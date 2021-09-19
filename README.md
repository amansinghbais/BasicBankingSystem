#Basic Banking System
Live Demo : https://amanbasicbankingsystem.herokuapp.com/

This repository is a simple project made by me as The Sparks Foundation Internship Project.
This is a Web Application to transfer money between multiple users using mongodb.This application contain dummy users.

Technologies Used: 

Front-End : HTML , CSS , JavaScript
Backend : NodeJs , ExpressJs
Template Engine : ejs
DataBase : Mondodb , Mongoose

How to Use: 

-First clone this repository in your local system using git clone and then in terminal/powershell or any command line tool enter npm install to install all the dependencies.
-After all this create your local environment(.env file) and save PORT no. and a link to connect to your Mongodb Atlas Database.
-Using seed.js file you can save dummy data in your database OR you can also use your own data to be saved in mondodb database.

DataBase Contains two Model:
1) Users Table : have fields such as aid , name , email ,  balance.
2) Transaction Table: have fields such as sno. , sender name , receiver name , amount

Flow Of the Website: 
Home Page > View All Users > Select and View One User > Transfer Money > Select Receiver > View All Users > View Transaction History
