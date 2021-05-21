class Game
  attr_accessor :id, :title, :genre, :price

  # TODO replace with database!
  @@all = []

  def initialize(id, title, genre, price)
    @id = id
    @title = title
    @genre = genre
    @price = price

    # TODO replace with database!
    @@all << self
  end

  # TODO replace with database!
  def self.all
    @@all
  end
end
