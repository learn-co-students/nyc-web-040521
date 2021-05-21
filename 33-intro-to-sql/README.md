Intro to SQL
===

## SWBATs

* [ ] Explain persistence and the need for using SQL
* [ ] Define SQL
* [ ] Explain the difference between SQLite3 and SQL
* [ ] Explore provided data through SQLite Browser
* [ ] Define CRUD
* [ ] Perform CRUD actions on a single table

## Key Questions
* Persistence
  - Data is saved no matter if we close the program
  
* What can I do with data?
  - collect data and infer conclusions (analyze)
  - Make changes to it

* Why is persistence important? How have we been persisting data so far?
  - data structures such as arrays and hashes
    - issues: 
      - volume of data that can stored depends on computer memory
      - doesn't persist after closing the program

* What is a (relational) database?
  - type of database that stores/saves and organizes data into tables, tables can be connected to each other

* What kinds of databases are there?
  - relational database (SQL database) - SQLite3, Postgresql, MySQL, MSSQL
  - NoSQL database - MongoDb (document datatype), Redis (key-value store), GraphQL

* What is SQL?
  - SQL stands for Structured Query Language and is a language that allows us to do:
    - Store / persist information
    - Manipulate that information

* What kind of operations can we do in SQL?
  - CRUD

* What is CRUD?
  C - Create 
  R - Read/Retrieve
  U - Update
  D - Delete

* How does an app like Instagram use CRUD?
  - C
  - R
  - U
  - D



## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game-reviews.db` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below


## Challenges

Game -< Review >- Player

Game has many Reviews
Player has many Reviews

A Review belongs to a Game
A Review belongs to a Player

Game has many Players through Review
Player has many Games through Review

___

1. Write SQL to return all of the rows in the games table



2. Write SQL to add a game to the games table



3. Write SQL to select the game with the title "Mario Kart 64"



4. Write a SQL query to update the game with the ID of 1



5. Write SQL to display the games' titles next to their review ratings




6. Write SQL to display the games title next to their review ratings AND the player name


