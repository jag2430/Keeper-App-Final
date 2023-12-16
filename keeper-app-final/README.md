# Keeper App Final Project


## Overview

For my final project, I chose to build off my midterm keeper app project by creating the backend. For the project, I used React functional components for styling the client side, Express and Node for setting up the backend server, and MongoDB as the Database for storing the title and description of the notes. In my final app, users can add a title as well as a description for all of their notes. They can also delete their notes. Blank notes are not allowed to be added.


## Breakdown

My repository consists of a client directory and a server directory. My components for my Keeper App are located within the src file of my client directory. For my server directory, I have an index.js file. This is the code that connects my backend to MongoDB. I did not deploy my project, choosing to host it locally. My server is at "http://localhost:5000". Within the App.jsx file in my client directory, I have a const set to this link called backendServerURL. This is how I run my web app locally with success. 


## Setting Up The Project

To run this project locally, you must follow a series of steps.

Open a new terminal and cd into the server directory and run "npm init".
Then, type in terminal "npm install express mongoose --save"
After the installation is complete, type "nodemon index.js"
If everything is working, you should see these two lines in terminal:

"backend created at port 5000"
"Connected to MongoDB"

After making sure that the server side is working, we now move onto the client directory.

Open a new terminal (making sure to not close the previous terminal) and cd into the client directory.
Once, you are in the client directory, type in terminal "npm install"
After the installation is complete, type "npm start".

The browser window will open with the url "http://localhost:3000/", and the project is now succesfully running.


# Using the App
* To start, click on the "Make a note..." placeholder.
* The text area will expanded and a **"+"** button to add the note will also appear.
* You now have the an option to add a title for the note.
* When you type something in the note and click on **"+"**, a new note gets created. This note comes with a trash can button for deleting the note.
* You are not allowed to add a blank note.
* Unlike the Midterm Keeper App, all notes are saved. Therefore if you choose to reload the page, the notes that you have written still appear.