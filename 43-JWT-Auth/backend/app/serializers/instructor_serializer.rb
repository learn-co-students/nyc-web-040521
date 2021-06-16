class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :name, :count_students

  has_many :students
end
