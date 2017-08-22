# 1
#   a = true
#   b = false
 
#     if a 
#         puts "true is truthy, duh!"
#       else
#         puts "true is falsey, wtf!"
#       end

#       if b 
#         puts "true is truthy, duh!"
#       else
#         puts "true is falsey, wtf!"
#       end



# 2
    # llamas = nil
    # puts "#{llamas} + was here"

# 3
# Create a variable d and set it equal to a Fixnum
# d = 15
# # puts the value of d to the terminal
# puts d
# # Create a variable e and set it equal to a Float
# e = 2.222
# # puts the value of e to the terminal
# puts e
# # Set d equal to e on another line
# d = e 
# # puts the value of d to the terminal
# puts d
# # Commit -m "3. Integers Skills"

# 4
# Create a variable christine and set it equal to the string "Hi, I'm Christine"
# christine = "hi, I'm Christine"
# # Create a variable likesTo and set it equal to the String "long walks on the beach, kinda."
# likes_to = "long walks on the beach, kinda."
# # Using string interpolation and the variables tims and likesTo puts the following string to the terminal: "Hi, I'm Christine and I like long walks on the beach, kinda."
# puts " #{christine} and I like #{likes_to}"
# # Create a variable g and set it equal to the string "2"
# g = "2"
# # Create a variable gToNumber and set it equal to the Integer 2
# gToNumber = 2
# # puts the value of g + gToNumber in the terminal. What happens? How can you fix this?
# puts g + gToNumber # gives error
# puts "#{g} + #{gToNumber}" #gives '2+2'
# # Commit -m "4. String skills "


# 5
# Create a small program that asks the user to input an Integer and multiplies the number by two.
# def grabNum ()
# puts 'Hello there, Can you tell me your favourite number?'
# num = gets.to_i
# puts num * 2 
# end
# grabNum()

# Create a small program that does the following
# Asks the user for their name
# def grabName ()
#     puts "hello, what is your name?"
#     name = gets.to_s
#     puts "what would you like to do?"
#     to_do= gets.to_s
#     puts "#{name} would like to #{to_do}."
#     end
#     grabName()
# Asks the user what they like to do
# Prints out the user's name and what they like to do in a sentence.
# Commit -m "5. Input/Output skills"


# 6
# # Create a variable myFirstArray and set it equal to an empty array
# my_first_array = []
# # Set the variable myFirstArray to an array with five Strings and four Integers
# my_first_array = ["fish", 2, "food",9, 3, "fried", "plantain",5, "green"]
# # Using myFirstArray puts the last value of the array to the terminal
# puts my_first_array.last
# # Using myFirstArray puts the first value of the array to the terminal
# puts my_first_array.first
# # Set the second value of myFirstArray to the String "Joe"
# puts my_first_array.place("Joe").before("fish")
# # Set the third value of myFirstArray to the Integer 3
# puts my_first_array.
# # Push the String Boolean true into myFirstArray
# puts my_first_array.push("true")
# # Puts the class of the fourth value in myFirstArray
# puts my_first_array.
# # Commit -m "6. Arrays skills"


# # 7
# # Create a variable called myFavoriteAnimals and set it equal to a Hash with five animals. 

#  my_fav_animals = { 
#      "Edgar" => "Donkey", 
#      "Jolene" => "Horse", 
#      "Fifi"  => "Cat", 
#      "Hussun" => "Husky", 
#      "Rascal" => "Hedgehog" }
     
# # Change value of Edgar to be "Bear"
# my_fav_animals['Edgar'] = "Bear"
# puts my_fav_animals
# # Create a variable favoriteMovie and set it equal to a new, empty Hash.
# my_fav_movie = {}
# # Edit the favoriteMovie hash and add a movie key with a value of your choosing.
# my_fav_movie['pretty_woman'] = true
# puts my_fav_movie
# Commit -m "7. Hashes skills"




# 8
# Create a variable 
first_range = (1..10)
# Convert firstRange to an array.
puts first_range.each.to_a
# Create a variable 
second_range = (1..999)
# # Create a For loop that changes every value in firstRange 
# to a String and using a p statement print 
# those values out to the terminal
for each in second_range do 
    puts each.to_s
end 
# Create a variable x and set it equal to zero
x = 0
# Create a While loop that prints every value in secondRange while x < 50.
while x < 50
    puts x
    x += 1
 break if x == 50
end 

# Using .each multiply every other value in firstRange 
# by two and push those values into a new Array. 
# Print that array to the terminal.

first_range.each()
# Using .map and if/else statements, 
# iterate through firstRange and change every even value 
# to a string. If the value is odd, don't change the value to a string.

# Commit -m "8. I'm a Ninja Warrior. Bow down to me."





