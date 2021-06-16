class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name
      t.string :major
      t.integer :age
      t.integer :instructor_id

      t.timestamps
    end
  end
end
