# passenger -< ride
# passengers >-< drivers
###### passengers -< ride >- drivers

class Passenger
  attr_reader :name, :rating, :credit_card

  def initialize(name, rating, credit_card)
    @name = name
    @rating = rating
    @credit_card = credit_card
  end

  # ⭐️ passenger has many rides!
  def rides
    Ride.all.select { |ride_instance| ride_instance.passenger == self }
  end
end
