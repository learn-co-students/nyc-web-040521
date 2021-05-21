puts "Creating drivers!"
Driver.destroy_all

Driver.create([
  { name: "Bin Lin", age: 10, valid_license: true, car: "Kia Telluride" },
  { name: "Corey", age: 10, valid_license: false, car: "Tesla" },
  { name: "David", age: 20, valid_license: true, car: "Ford" },
  { name: "Isaac", age: 21, valid_license: false, car: "Mazda" },
  { name: "Katie", age: 19, valid_license: true, car: "BMW" },
  { name: "Michael", age: 8, valid_license: false, car: "Tesla" },
  { name: "Jenna", age: 18, valid_license: true, car: "Mustang" },
  { name: "Yosef", age: 25, valid_license: true, car: "Tonka" }
])

puts "Done creating drivers!"
