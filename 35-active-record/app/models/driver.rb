class Driver < ActiveRecord::Base
  def self.find_youngest_drivers
  end

  def self.find_drivers_with_invalid_licenses
  end
end

# CREATE

# Driver.new(hash) -> creates a Ruby instance (not saved to the DB)
# Driver#save -> saves the Ruby instance to the DB
# Driver.create(hash) -> new + save

# READ
# Driver.all -> returns array of all driver instances
# Driver.first/second/...sixth/last
# Driver.find(id) -> returns instance with that ID
# Driver.find_by(hash) -> returns the instance matching those key value/s
# Driver.where(hash) -> return an array of all the instances who match/meet the criteria
# Driver.where("age > 10")
# Driver.minimum(:column_name) -> returns the minimum value in the table for that column
# Driver.maximum(:column_name)
# Driver.average(:column_name)
# Driver.order("column_name DESC") -> returns an array of the instances in descending order by that column
# Driver.order("column_name ASC") -> returns an array of the instances in ascending order by that column

# Driver.where("created_at > 2021-05-21 19:00") -> finding drivers within a certain range??????

# UPDATE

# Driver#attribute_name = "new value" -> updates attribute in memory only
# Driver#save -> actually saves updated instance to DB
# Driver#update(hash) -> combo of the two lines above
# Driver.update(hash) -> updates everybody's column/s

# DELETE
# Driver#destroy -> deletes record from DB
# Driver.destroy_all -> deletes all records from DB!
