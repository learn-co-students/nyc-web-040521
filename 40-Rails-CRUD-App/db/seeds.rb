# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Owner.destroy_all
Dog.destroy_all

o1 = Owner.create(name: "Geddy", age: 27)
o2 = Owner.create(name: "Barak", age: 27)


Dog.create(name: "Raffy" ,age: 5 , breed: "mix" , owner_id: o2.id )
Dog.create(name: "Ciffore" ,age: 6 , breed: "pitBull" , owner_id: o1.id )
Dog.create(name: "Richi" ,age: 12 , breed: "pug" , owner_id: o2.id )


puts "Done!"