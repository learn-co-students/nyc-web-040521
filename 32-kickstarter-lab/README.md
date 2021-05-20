# OO Relationships: Kickstarter Lab

## Learning Goals

- Build classes that produce objects that relate to one another

## Description

In this lab, we are going to be creating a very, very simple version of
Kickstarter. We'll have Projects and Backers (and no concept of money at all),
and they will need to interact with one another realistically.

We want our interface to work something like this:

```ruby
bob = Backer.new("Bob")
awesome_project = Project.new("This is an Awesome Project")

bob.back_project(awesome_project)

bob.backed_projects
# => [#<Project:0x000001018683d0 @title="This is an Awesome Project"...>]

awesome_project.backers
# => [#<Backer:0x000001018b9370 @name="Bob"...>]
```

The tricky thing here is that projects can have many backers and backers can
back many projects. Neither can _belong to_ just one of the other.

However, if we introduce a third class in between Project and Backer, we can
establish a _has many through_ relationship in both directions!

We can call this class ProjectBacker — each instance of ProjectBacker will
represent an association between a single backer and a single project. A
ProjectBacker, therefore, belongs to one Backer and one Project. ProjectBacker,
in essence, acts as a _join_ between Project and Backer. It allows us to
maintain the 'has many' / 'has many' relationship that the two have.

## Instructions

The specs have been set to run in the default order, and are written in such a
way that tests for the Backer, Project, and ProjectBacker classes are mixed in
with one another. This is not how you'd normally see specs for multiple objects.
For the purposes of this lab, though, following the specs in order will
eventually lead you to the correct relationships between your classes.

- When a `Backer` instance is initialized, it should be initialized with a name.

- When a `Project` instance is initialized, it should be initialized with a
  title.

- When a `ProjectBacker` instance is initialized, it should be initialized with
  a `Project` instance and a `Backer` instance.

- The `ProjectBacker` class is maintaining the relationship. It should have an
  `@@all` class variable. When an instance is initialized, it should be stored
  in this variable.

- The `ProjectBacker` class should also have a class method `.all` that returns
  the `@@all` class variable.

- Once both classes have their attributes and readers set up, write an instance
  method on the Backer class called `back_project` that takes in a Project
  instance. This method should create a `ProjectBacker` instance using the
  provided Project instance and the current Backer instance (the instance this
  method was called on).

- Similarly, write a method on the Project class called `add_backer` that takes
  in a Backer instance and creates a `ProjectBacker` using the Backer instance
  and the current Project instance.

- With `back_project` set up, the final step for the Backer class is to build an
  instance method that returns all the projects associated with _this Backer
  instance_. Since Project instances are not directly associated with Backer
  instances, you will need to get this information _through_ the ProjectBacker
  class.

- For the Project class, write a similar method, `backers`, that returns all
  backers associated with this Project instance.

## Conclusion

By creating the ProjectBacker class, we can maintain a single source of truth in
a relationship where both sides have many of the other.

ProjectBacker is also a great example of how awesome object orientation is
— we can use OO to represent real-world relationships and classes to
represent _things_. But sometimes, when we need more flexibility, classes can
exist purely to represent a _relationship_.
