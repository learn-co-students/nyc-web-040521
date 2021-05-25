class Magazine < ActiveRecord::Base
  has_many :subscriptions # gives us an instance method
  has_many :readers, through: :subscriptions

  #   def subscriptions
  #     Subscription.all.select do |subscription|
  #       subscription.magazine_id == self.id
  #     end
  #   end

  #   def readers
  #     self.subscriptions.map do |sub|
  #       sub.reader
  #     end
  #   end

  def email_list
    # get all the readers associated with this magazine
    # get all the readers' emails
    # email_arr = self.readers.map do |reader_instance|
    #   reader_instance.email
    # end

    # # format list accordingly
    # email_arr.join(";")

    # Approach 2
    self.readers.map { |reader_instance| reader_instance.email }.join(";")
  end

  #   def self.most_popular
  def Magazine.most_popular
    # get all the magazines
    # want to compare how many subscriptions each magazine has
    # Magazine.first.subscriptions.length

    Magazine.all.max_by do |magazine_instance|
      magazine_instance.subscriptions.length
    end
  end
end
