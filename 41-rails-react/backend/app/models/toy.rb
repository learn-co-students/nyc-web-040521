class Toy < ApplicationRecord

    scope :most_likes, -> (likes) { where("likes > ?", likes) }

end
