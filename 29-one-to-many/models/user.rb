class User
  attr_reader :username, :bio

  def initialize(username, bio)
    @username = username
    @bio = bio
  end

  # def username
  #   @username
  # end

  # indicates has many
  def post_tweet(message)
    new_tweet = Tweet.new(message, self) # a tweet belongs to a user
  end

  # indicates 1-many
  def tweets
    Tweet.all.select do |tweet_instance|
      tweet_instance.user == self
    end
  end
end
