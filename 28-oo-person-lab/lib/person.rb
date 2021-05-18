require "pry"
# your code goes here
class Person
  attr_reader :name, :happiness, :hygiene
  attr_accessor :bank_account #, :hygiene #, :happiness

  #   def bank_account=(some_value)
  #     @bank_account = some_value
  #   end

  def initialize(name)
    @name = name
    @bank_account = 25
    @happiness = 8
    @hygiene = 8
  end

  def happiness=(points)
    if points >= 10
      @happiness = 10
    elsif points <= 0
      @happiness = 0
    else
      @happiness = points
    end
  end

  def hygiene=(points)
    if points >= 10
      @hygiene = 10
    elsif points <= 0
      @hygiene = 0
    else
      @hygiene = points
    end
  end

  def happy? #instance method
    self.happiness > 7
  end

  def clean?
    self.hygiene > 7
  end

  def get_paid(salary)
    # @bank_account = @bank_account + salary
    # @bank_account += salary
    self.bank_account = self.bank_account + salary
    "all about the benjamins"
  end

  def take_bath
    # binding.pry
    # @hygiene = @hygiene + 4
    self.hygiene = self.hygiene + 4
    "♪ Rub-a-dub just relaxing in the tub ♫"
  end

  def work_out
    # self.hygiene=(self.hygiene - 3)
    self.hygiene = self.hygiene - 3
    self.happiness = self.happiness + 2
    "♪ another one bites the dust ♫"
  end

  def call_friend(friend)
    # binding.pry
    self.happiness = self.happiness + 3
    friend.happiness = friend.happiness + 3
    "Hi #{friend.name}! It's #{self.name}. How are you?"
  end

  def start_conversation(friend, topic)
    if topic == "politics"
      friend.happiness = friend.happiness - 2
      self.happiness = self.happiness - 2
      "blah blah partisan blah lobbyist"
    elsif topic == "weather"
      friend.happiness = friend.happiness + 1
      self.happiness = self.happiness + 1
      "blah blah sun blah rain"
    else
      "blah blah blah blah blah"
    end
  end
end



# binding.pry
