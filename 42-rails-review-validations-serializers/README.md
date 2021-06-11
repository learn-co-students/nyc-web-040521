# Rails Mock Challenge - Camping Fun

Congratulations! You have been hired by Access Camp and for your first job, you
have been tasked with building out a website to log campers with their
activities.

In this repo, there is a Rails application with some features built out. There
is also a fully built React frontend application, so you can test if your API is
working.

Your job is to build out the Rails API to add the functionality described in the
deliverables below.

## Setup

To download the dependencies for the frontend and backend, run:

```sh
bundle install
npm install --prefix client
```

There is some starter code in the `db/seeds.rb` file so that once you've
generated the models, you'll be able to create data to test your application.

You can run your Rails API on [`localhost:3000`](http://localhost:3000) by running:

```sh
rails s
```

You can run your React app on [`localhost:4000`](http://localhost:4000) by running:

```sh
npm start --prefix client
```

You are not being assessed on React, and you don't have to update any of the React
code; the frontend code is available just so that you can test out the behavior
of your API in a realistic setting.

There are also tests included which you can run using `rspec` to check your work.

Depending on your preference, you can either check your progress by:

- Running `rspec` and seeing if your code passes the tests
- Running the React application in the browser and interacting with the API via
  the frontend
- Running the Rails server and using Postman make requests

## Models

You need to create the following relationships:

- A `Camper` has many `Activity`s through `Signup`s
- An `Activity` has many `Camper`s through `Signup`s
- A `Signup` belongs to a `Camper` and belongs to a `Activity`

Start by creating the models and migrations for the following database tables:

![domain diagram](https://curriculum-content.s3.amazonaws.com/phase-4/mock-challenge-camping-fun/diagram.png)

If you use a Rails generator to create the models, make sure to use the
`--no-test-framework` flag to avoid overwriting the test files.

Add any code needed in the model files to establish the relationships.

Then, run the migrations and seed file:

```sh
rails db:migrate db:seed
```

> If you aren't able to get the provided seed file working, you are welcome to
> generate your own seed data to test the application.

## Validations

Add validations to the `Camper` model:

- must have a `name`
- must have a `age` between 8 and 18

Add validations to the `Signup` model:

- must have a `time` between 0 and 23 (referring to the hour of day for the
  activity)

## Routes

Set up the following routes. Make sure to return JSON data in the format
specified along with the appropriate HTTP verb.

### GET /campers

Return JSON data in the format below:

```json
[
  {
    "id": 1,
    "name": "Caitlin",
    "age": 8
  },
  {
    "id": 2,
    "name": "Lizzie",
    "age": 9
  }
]
```

### GET /campers/:id

If the `Camper` exists, return JSON data in the format below:

```json
{
  "id": 1,
  "name": "Caitlin",
  "age": 8,
  "activities": [
    {
      "id": 1,
      "name": "Archery",
      "difficulty": 2
    },
    {
      "id": 2,
      "name": "Swimming",
      "difficulty": 3
    }
  ]
}
```

If the `Camper` does not exist, return the following JSON data, along with
the appropriate HTTP status code:

```json
{
  "error": "Camper not found"
}
```

### POST /campers

This route should create a new `Camper`. It should accept an object with the
following properties in the body of the request:

```json
{
  "name": "Zoe",
  "age": 11
}
```

If the `Camper` is created successfully, send back a response with the new
`Camper`:

```json
{
  "id": 2,
  "name": "Zoe",
  "age": 11
}
```

If the `Camper` is **not** created successfully, return the following JSON data,
along with the appropriate HTTP status code:

```json
{
  "errors": ["validation errors"]
}
```

### GET /activities

Return JSON data in the format below:

```json
[
  {
    "id": 1,
    "name": "Archery",
    "difficulty": 2
  },
  {
    "id": 2,
    "name": "Swimming",
    "difficulty": 3
  }
]
```

### DELETE /activities/:id

If the `Activity` exists, it should be removed from the database, along with
any `Signup`s that are associated with it (a `Signup` belongs
to a `Activity`, so you need to delete the `Signup`s before the
`Activity` can be deleted).

After deleting the `Activity`, return an _empty_ response body, along with the
appropriate HTTP status code.

If the `Activity` does not exist, return the following JSON data, along with
the appropriate HTTP status code:

```json
{
  "error": "Activity not found"
}
```

### POST /signups

This route should create a new `Signup` that is associated with an
existing `Camper` and `Activity`. It should accept an object with the following
properties in the body of the request:

```json
{
  "time": 9,
  "camper_id": 1,
  "activity_id": 3
}
```

If the `Signup` is created successfully, send back a response with the data
related to the `Activity`:

```json
{
  "id": 1,
  "name": "Archery",
  "difficulty": 2
}
```

If the `Signup` is **not** created successfully, return the following JSON data,
along with the appropriate HTTP status code:

```json
{
  "errors": ["validation errors"]
}
```
