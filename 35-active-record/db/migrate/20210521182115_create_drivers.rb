class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :car
      t.boolean :valid_license
      t.integer :age

      t.timestamps
    end
  end
end
