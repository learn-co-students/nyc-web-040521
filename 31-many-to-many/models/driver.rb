# build out driver class
# build out the ride class
# driver -< ride

class Driver
  attr_reader :name, :car, :valid_license, :rating

  def initialize(name, car, rating, valid_license)
    @name = name
    @car = car
    @rating = rating
    @valid_license = valid_license
  end

  # ⭐️ rides instance method
  def rides
    Ride.all.select do |ride_instance|
      ride_instance.driver == self
    end
  end
end
