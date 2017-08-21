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
def grabName ()
    puts "hello, what is your name?"
    name = gets.to_s
    puts "what would you like to do?"
    to_do= gets.to_s
    puts "#{name} would like to #{to_do}."
    end
    grabName()
# Asks the user what they like to do
# Prints out the user's name and what they like to do in a sentence.
# Commit -m "5. Input/Output skills"







