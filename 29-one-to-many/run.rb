require "pry"
require_relative "models/user"
require_relative "models/tweet"

u1 = User.new("CoffeeDad", "A dad who loves coffee too much")
u2 = User.new("michelle", "I prefer tea")
u3 = User.new("barak", "I'm hungry")
u4 = User.new("corey", "I wanna go on a bike ride")

# user must exist for a tweet to exist
t1 = Tweet.new("Just got a new bike", u4)
t2 = Tweet.new("Gonna get some food. nOT SHARING", u3)
t3 = Tweet.new("I'm wanting tea", u2)
t4 = Tweet.new("Coffee beats all!!!!", u1)

binding.pry
