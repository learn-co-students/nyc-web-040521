# Intro to Active Record

#### By the end of this lesson, students should be able to:
1. Implement ActiveRecord in a project
2. Practice creating migrations for updating the database structure
3. Explain how rake works and how to run rake tasks
4. Practice with ActiveRecord::Base instance and class methods
5. Perform persistent CRUD actions on one model using ActiveRecord



 
## Rake

Rake is a software task management and build automation tool that lets us write tasks or some set of instructions that we can execute on the command line using `rake`.

If we want to check what tasks are available to us, we can write the following in the command line:
`rake --tasks` or `rake -T`.

## Setting Up Active Record on a Model

1. Create class & inherit from `ActiveRecord::Base`
2. Create a migration
    - What is a migration? A set of instructions in Ruby for how our tables should look
    - `rake db:create_migration NAME=create_games`
    - The command above will create a migration file inside of the `db/migrate` directory
3. Write migration code
    ```Ruby
    def change
        create_table :games do |t|
            t.string(:title)
            t.string(:genre)
            t.string(:publisher)
            t.integer(:rating)
        end
    end
    ```
4. Run migrations
    - `rake db:migrate`

5. Check migrations
    - schema.rb
    - `rake db:migrate:status`

6. Test!


##### Other useful commands

* `rake console`
* `rake db:rollback`
* `rake db:rollback STEP=x` where x is any postive integer
* `rake db:migrate:status`


## Connecting to a Model

Inside of our `models` folder (in the `app` folder), we want to create the Ruby classes and each class should inherit `ActiveRecord::Base` in order to have access to the ActiveRecord methods that will allow us to interact with the database. Each class name should be the singular version of the corresponding table name. If you are not sure of the singular or plural version of a word, use the `singularize` or `pluralize` ActiveRecord methods. Sticking to these conventions will make your life easier. 

### CRUD
#### CREATE
 * `Game.new` - create a Ruby instance
 * `Game#save` - save a Ruby instance to the database
 * `Game.create` - new + save

 #### READ
 * `Game.all` - returns Ruby instances for all rows in the db table
 * `Game.first` - returns Ruby instance of first row in db table
 * `Game.last` - return Ruby instance of last row in db table
 * `Game.find(id)` - returns first Ruby instance of row with given id
 * `Game.find_by(hash)` -  takes a hash and returns first Ruby instance with matching attribute/s
 *  `Game.where(hash)` - Similar to `Game.find_by` except returns a collection of all the instances with the matching criteria

 #### Update
 * `Game#save` takes a Ruby instance and updates it in the db table (if it already has an id) 
 ```Ruby
 game.title = "Planet Zoo" # update the title attribute   
game.save # save changes to database 
```

* `Game#update()` - takes a hash and updates one row in the database table
* `Game.update()` - takes a hash and updates all the rows in database table

#### Delete
* `Game#destroy` - deletes one row from database table
* `Game.destroy_all` - deletes all rows from database table


____

##### Extra Resources

* [Active Record Basics](https://guides.rubyonrails.org/active_record_basics.html)
* [Active Record Migrations](https://guides.rubyonrails.org/active_record_migrations.html)
* [Active Record Querying](https://guides.rubyonrails.org/active_record_querying.html)