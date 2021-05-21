class Game
  attr_accessor :id, :title, :genre, :price

  # TODO replace with database!
  # @@all = []

  def initialize(id, title, genre, price)
    @id = id
    @title = title
    @genre = genre
    @price = price

    # TODO replace with database!
    # @@all << self
    self.save
  end

  # TODO replace with database!
  def self.all
    # @@all
    sql = "SELECT * FROM games;"
    results = DB[:conn].execute(sql) # array of game hashes

    results.map do |row_hash|
      Game.new(row_hash["id"], row_hash["title"], row_hash["genre"], row_hash["price"])
    end
  end

  def save
    sql = "INSERT INTO games(title, genre, price) values (?, ?, ?)"
    DB[:conn].execute(sql, self.title, self.genre, self.price)
  end
end
