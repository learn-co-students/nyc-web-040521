Intro to ORMs
===

<img src='https://miro.medium.com/max/700/1*0YXhekcXW8Ij5K2WFT1oOw.png'>

## SWBATs

* [ ] Follow code that is organized into different files
* [ ] Define Object Relational Mapper (ORM)
* [ ] Explain how the `sqlite` gem works as a driver or wrapper around SQL
* [ ] Perform persistent CRUD actions on a model
* [ ] Distinguish between ORM and SQL
* [ ] Demonstrate that ORMs are the pattern connecting scripting languages and databases
* [ ] Explain to a peer all the things that happen when we call `Tweet.all` (your answer should include when SQL is fired & when Ruby objects are created)

## Outline
* ORM discussion
* App overview
  * What is a `Gemfile`? What is `bundle install`?
  * What is the `sqlite` gem? How can we use it to communicate between Ruby and a database?
* Connect our app to SQL and update our class

## Object Relational Mapper (ORM) Questions

* What is an ORM?
  - Object - container, hash, list of information, key/value pairs, instance, class
  - Relational - joiner class, associations
  - Mapper - enumerators (map & collect)

* How do the following SQL concepts translate to Ruby?
  * table - class
  * row - instance/object
  * column - method, attribute
  * cell - data value

* What is the advantage of using an ORM? What are some drawbacks?



### Resources
  - [Bundler documentation](https://bundler.io/docs.html)
  - [SQLite documentation](https://www.sqlite.org/lang.html)
  - [SQLite3 gem](https://github.com/sparklemotion/sqlite3-ruby)
  - [Why we need to sanitize database queries](https://xkcd.com/327/)