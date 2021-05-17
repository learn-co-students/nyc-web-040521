require "pry"

# puts "Hello world!"
# print "My name is Raffy"

TURKEY = "cheese" # capital letters indicate a constant! Don't change the value of the variable
# TURKEY = "purple" # BAD!

# there's const, let, var

name = "Raffy"

age = 10 # integer
exact_age = 10.5 # float, snake case

this_is_a_symbol = :blue

# article = {
#   title: "my road trip",
#   length: 504,
#   authorName: "Raffy"
# } # hash

# article = {
#   :title => "my road trip",
#   :length => 504,
#   :authorName => "Raffy",
# } # hash

# another_article = {
#   "title" => "my road trip",
#   "length" => 504,
#   "authorName" => "Raffy",
# } # hash


# yet_another_article = {
#   "title" => "my road trip",
#   :length => 504,
#   "authorName" => "Raffy",
# } # hash



def say_cheese(cheese_name)
  puts "I love cheese..."
  "#{cheese_name}!!!!!" # the last statement will be returned
end



binding.pry
