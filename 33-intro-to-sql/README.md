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
  - C - creating a comment
  - R - read a post/s & pictures
  - U - update a profile, update post
  - D - delete a post



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

```sql
SELECT * FROM games;
```

```sql
SELECT title FROM games;
```


2. Write SQL to add a game to the games table

```sql
INSERT INTO games(title, genre, price)
VALUES ("Cat Fight", "arcade", 1000000);
```

3. Write SQL to select the game with the title "Mario Kart 64"

```sql
SELECT * FROM games
WHERE games.title = "Mario Kart 64";
```

```sql
SELECT * FROM games
WHERE games.title LIKE "mario Kart 64";
```

```sql
SELECT * FROM games
WHERE games.title LIKE "%mario%";
```


4. Write a SQL query to update the game with the ID of 1

```sql
UPDATE games
SET price=10
WHERE id=1;
```


5. Write SQL to display the games' titles next to their review ratings

- what type of join?
  - inner join

```sql
SELECT games.title, reviews.rating, reviews.comment
FROM games
JOIN reviews on games.id = reviews.game_id;
```



6. Write SQL to display the games title next to their review ratings AND the player name

```sql
SELECT games.title, reviews.rating, reviews.comment, players.name
FROM games
JOIN reviews on games.id = reviews.game_id
JOIN players on players.id = reviews.player_id;
```

