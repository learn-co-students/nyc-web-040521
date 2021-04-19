# Phase 1 Project Guidelines

## Learning Goals

- Design and architect features across a frontend
- Communicate and collaborate in a technical environment
- Design and integrate an API to a Single Page Application
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

## Introduction

Welcome to JavaScript Project Mode!

You’ve worked so hard to get here and have learned a ton. Now it's time to bring it all together!

For this project, you're going build a Single Page Application (**SPA**).
Building this application will be challenging because it will integrate
everything you've learned up to this point. Your frontend will be
built with HTML, CSS, and JavaScript and will communicate with an
API that you create.


### Project Requirements

1. Your app must be a HTML/CSS/JS frontend that accesses data from an API created with `json-server`.
   All interactions between the client and the API should be handled
   asynchronously and use JSON as the communication format.

2. Your entire app must run on a single page. There should be NO redirects. In
   other words, your project will contain a single HTML file and should primarily use JS 
   to build out its features. 

3. Your project should utilize at least one GET request and at least one non-GET request.
   The latter should result in the data with the db.json file to be altered in some way; 
   some examples of it could be incrementing a like by 1 or adding a resource. The changes
   that you make should persist after reloading the page.

### Stretch Goals

4. Create multiple associated resources for your `json-server`, following the [documentation](https://github.com/typicode/json-server#relationships).  
  Take a look this example [`db.json`](https://github.com/learn-co-curriculum/js-quotes-practice/blob/master/db.json).
5. Populate the data in your `db/seeds.json` file from an external API. 

## Strategy, Timeline, and Tips

### Planning

- Plan out your features
- Develop user stories
  - “As [ a user ], I want [ to perform this action ] so that [ I can accomplish this goal ].”
  - Features should not need you there to explain them to users
- Plan out the structure of your resource(s) within the `db/seeds.json` file

### Project Pitches

Before you start working on your project, you'll pitch your project idea to your
instructors for approval and feedback.

For your project pitch, you should include:

- At least 4 basic user stories of your application, one for each of the CRUD actions
- The core features of your MVP
- Challenges you expect to face

### MVP ASAP

- Build a Minimum Viable Product (MVP) as quickly as possible.
  - Pick an API and explore it early on to ensure it will work for your needs

### Rough Timeline

* Day 1 - Idea, Project Pitches, first commit
* Day 2 - MVP, first feature working
* Day 3 - Additional features
* Day 4 - Final features, bugfixes, polish

### Feedback

- Get feedback from instructors before you start to build
- Get feedback from your peers as you build each feature. This will help
  identify bugs and design improvements
- Get feedback on your code from instructors as you build

### Instructor Guidance

You should strive to solve problems independently, but you also shouldn't waste
your time stuck on a problem. A good guideline for a small bug is the rule of
10s:

- 10 minutes debugging the code
- 10 minutes using Google and StackOverflow to try to find an answer
- 10 minutes asking your teammates or fellow students for help
- Asking an instructor

If you seek out instructor guidance on your design from the start, they might
help steer you into design and architectural decisions that will help you down
the road. That will also give the instructors context for what your app is
supposed to do, so you won't need to explain everything to them when asking for
help debugging.

### Guidelines for Staying Organized

**Write down** the decisions you make about your project. This will not only
help you think more clearly, it will also help you communicate your project to
instructors when asking for help. In addition to writing everything down, we
also recommend the following to help stay organized and on track:

- Describe/sketch your ideas (use diagrams!).
- Start by creating a frontend directory with the basic files you'll need (HTML, CSS, JS)
- Next, build enough of your `db/seeds.json` to get some data to work with in JS. Don't worry about
  building all of your async code yet, just get to the point where you can
  access one endpoint on your API, then start working on getting that data
  displayed.
- Then, continue to build additional async code and other frontend features to meet CRUD.
- Continue building features one by one.

Check in with your instructors from time to time to make sure your scope and timeline are
manageable.


## Setup

Fork and clone this repo. Then install the dependencies by running:

```sh
npm install
```

## Seeding Data

To set up your database, update the `db/seeds.json` file to contain an object
with a key pointing to an array of data, like this:

```json
{
  "books": [
    {
      "id": 1,
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958,
      "likes": 0
    },
    {
      "id": 2,
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836,
      "likes": 0
    }
  ]
}
```

Then, run `npm run seed` to copy data from the `db/seeds.json` file to the
`db/db.json` file. `json-server` uses the `db.json` file to create your RESTful
API, so make sure your `db.json` file is always up to date!

Any time you want to reset your database back to your original data, run
`npm run seed` again. Doing this will overwrite all the data in your `db.json`
file, so make sure you don't have any data in that file that you don't mind
losing!

## Running the Server Locally

To run your server in development mode, run:

```sh
npm run dev
```

While running in development mode, the server will re-load any time you make
changes to the `db.json` file, so you can test our your seed data.

While your server is running, you can make requests to
[http://localhost:3000](http://localhost:3000). Check it out in the browser to
make sure your server works!

## Deploying the Server

Free services like Heroku make it simple to deploy your Node server. Heroku also
works nicely with Rails, which you'll learn later in the program.

First, download the [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

Then, [deploy your app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app).

Since Heroku deployment integrates with your git repo, you can easily deploy
changes to your database. To deploy changes, make sure to commit your code:

```sh
git add .
git commit -m "Updated database"
```

Then push your main/default branch up to Heroku:

```sh
git push heroku main
```
