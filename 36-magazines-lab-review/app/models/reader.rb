class Reader < ActiveRecord::Base
  has_many :subscriptions # give us instance methods!
  has_many :magazines, through: :subscriptions

  def subscribe(magazine, price)
    # Subscription.create(price: price, magazine_id: magazine.id, reader_id: self.id)
    Subscription.create(price: price, magazine: magazine, reader: self)
  end

  def total_subscriptions
    # self.subscriptions.sum(:price)

    self.subscriptions.inject(0) do |sum, subscription_instance|
      sum + subscription_instance.price
    end
  end

  def cancel_subscription(magazine)
    sub = Subscription.find_by(magazine_id: magazine.id, reader_id: self.id)
    if sub
      sub.destroy
    end
  end
end
