require "pry"

class Character
  attr_reader :eye_color, :hometown, :health_points # writes getter methods for us!!!
  #   attr_writer  # writes setter methods for us!!!
  attr_accessor :name, :age, :height # writes both getter AAAAND setter methods for us!!!

  def initialize(name, age, height, eye_color, hometown)
    @name = name
    @age = age
    @height = height
    @eye_color = eye_color
    @hometown = hometown
    @health_points = 10
  end

  def greeting
    "Hi, my name is #{@name} and I'm #{@age} years old!"
  end

  # getter/reader method
  # def name
  #   "My name is #{@name}."
  # end

  #   def age
  #     @age
  #   end

  # setter methods!
  #   def age=(updated_age)
  #     @age = updated_age
  #   end
end

timmy = Character.new("timmy turner", 12, "medium", "blue", "Dimmsdale") # instance of the character class
# this is an object

minnie_mouse = Character.new("minnie mouse", 30, "mouse height", "black", "Looney Town")

binding.pry
