class Instructor < ApplicationRecord
    has_many :students

    validates :name, presence: true

    def count_students
        self.students.count
    end
end
