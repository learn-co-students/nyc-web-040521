class Dog
  attr_reader :name
  attr_accessor :owner, :mood
  @@all = []

  def initialize(name, owner)
    @name = name
    @owner = owner # dog belongs to an owner
    @mood = "nervous"

    @@all << self
  end

  def self.all
    @@all
  end
end
