class CreateApiV1Dogs < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_dogs do |t|

      t.timestamps
    end
  end
end
