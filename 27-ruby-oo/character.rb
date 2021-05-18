require "pry"

class Character
  attr_reader :eye_color, :hometown, :health_points # writes getter methods for us!!!
  #   attr_writer  # writes setter methods for us!!!
  attr_accessor :name, :age, :height # writes both getter AAAAND setter methods for us!!!

  @@character_count = 0

  def initialize(name, age, height, eye_color, hometown)
    @name = name
    @age = age
    @height = height
    @eye_color = eye_color
    @hometown = hometown
    @health_points = 10

    @@character_count += 1
  end

  #   class method. can only be called on by the CLASS itself
  #   def Character.character_count
  def self.character_count
    # self inside of a class method will always be the class itself!
    @@character_count
  end

  def go_to_the_gym
    # health points should increase
    self.increase_health_points
    # return their health points and a little message
    "I feel so healthy after that workout!"
  end

  def eat_broccoli
    # health points should increase
    self.increase_health_points
    # return their health points and a little message
    "I loved that broccoli. Good choice!"
  end

  def greeting
    # "Hi, my name is #{@name} and I'm #{@age} years old!" # accessing instance variable directly
    # "Hi, my name is #{name} and I'm #{age} years old" # implicit self is being used!
    "Hi, my name is #{self.name} and I'm #{self.age} years old" # using getter methods with the explicit self
  end

  private

  # private methods can only be invoked from inside of the class
  def increase_health_points
    @health_points = @health_points + 1
  end
end

timmy = Character.new("timmy turner", 12, "medium", "blue", "Dimmsdale") # instance of the character class
# this is an object

minnie_mouse = Character.new("minnie mouse", 30, "mouse height", "black", "Looney Town")

binding.pry
