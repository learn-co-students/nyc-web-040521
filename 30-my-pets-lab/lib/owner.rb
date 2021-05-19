require "pry"
# require_relative "cat"
# require_relative "dog"

class Owner
  attr_reader :name, :species
  @@all = []

  def initialize(name)
    @name = name
    @species = "human"

    @@all << self
  end

  def self.all
    @@all
  end

  def self.count
    self.all.length
  end

  def self.reset_all
    # self.all.clear
    # @@all = []
    @@all.clear
  end

  def say_species
    "I am a #{self.species}."
  end

  def cats
    # Cat.all.select do |cat_instance|
    #   cat_instance.owner == self
    # end
    Cat.all.select { |cat_instance| cat_instance.owner == self }
  end

  def dogs
    Dog.all.select { |dog_instance| dog_instance.owner == self }
  end

  def buy_cat(name)
    Cat.new(name, self)
  end

  def buy_dog(name)
    Dog.new(name, self)
  end

  def walk_dogs
    self.dogs.each do |dog_instance|
      dog_instance.mood = "happy"
    end
  end

  def feed_cats
    self.cats.each { |cat_instance| cat_instance.mood = "happy" }
  end

  def sell_pets
    pets = self.dogs + self.cats
    # binding.pry

    pets.each do |pet_instance|
      pet_instance.owner = nil
      pet_instance.mood = "nervous"
    end
  end

  def list_pets
    "I have #{self.dogs.count} dog(s), and #{self.cats.count} cat(s)."
  end
end

# binding.pry
