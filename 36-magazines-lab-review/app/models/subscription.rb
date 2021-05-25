class Subscription < ActiveRecord::Base
  belongs_to :reader # gives us instance methods like the attr_macros
  belongs_to :magazine

  #   def reader
  #     Reader.find(self.reader_id)
  #   end

  def print_details
    puts "#{self.reader.name} subscribed to #{self.magazine.title} for $#{self.price}"
  end
end
