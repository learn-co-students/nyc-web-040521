require "pry"
require_relative "models/ride"
require_relative "models/passenger"
require_relative "models/driver"

d1 = Driver.new("barak", "jeep", 10, true)
d2 = Driver.new("jenna", "tesla", 10, true)
d3 = Driver.new("raffy", "bmw", 10, false)
d4 = Driver.new("sean", "ice cream truck", 10, true)

p1 = Passenger.new("david", 9, "mx black card")
p2 = Passenger.new("itche", 5, "uber card")
p3 = Passenger.new("kent", 7, "visa")

r1 = Ride.new("here", "there", 900, d1, p1)
r4 = Ride.new("Kansas", "Alaska", 900, d1, p2)
r5 = Ride.new("there", "here", 1900, d1, p1)
r2 = Ride.new("middle of nowhere", "somwhere", 5, d2, p1)
r3 = Ride.new("42 wallaby way, sydney", "dentist", 7, d3, p3)

binding.pry
