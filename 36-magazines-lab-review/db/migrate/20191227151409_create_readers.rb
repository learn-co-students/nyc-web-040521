class CreateReaders < ActiveRecord::Migration[6.1]
  def change
    create_table :readers do |t|
      t.string :name
      t.string :email
    end
  end
end
