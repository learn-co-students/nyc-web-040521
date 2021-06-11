class CamperSerializer < ActiveModel::Serializer
  attributes :id, :name, :age #, :signups

  has_many :signups, Serializer: DefaultSerializer
  # has_many :activities
end
