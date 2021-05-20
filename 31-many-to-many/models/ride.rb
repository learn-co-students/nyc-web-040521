class Ride
  attr_reader :driver, :pick_up, :destination, :price, :passenger

  @@all = []

  def initialize(pick_up, destination, price, driver, passenger)
    @pick_up = pick_up
    @destination = destination
    @price = price
    @driver = driver # ⭐️ ride belongs to a driver
    @passenger = passenger # ⭐️ ride belongs to a passenger
    @@all << self
  end

  def self.all
    @@all
  end
end
