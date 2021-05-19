# belongs_to :user
class Tweet
  attr_reader :user
  @@all = [] # single source of truth for tweets

  def initialize(message, user)
    # indicates 1-many relationship
    @user = user # a tweet belongs to a user
    @message = message

    @@all << self
  end

  def self.all
    @@all
  end

  def username
    self.user.username
  end
end
