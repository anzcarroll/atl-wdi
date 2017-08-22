require 'pry'

class User
   def initialize(firstname:, lastname:)
    @firstname = firstname
    @lastnaem = lastname
    end

    def full_name
        return "#{@firstname.capitalize} #{@lastname.capitalize}"
      end
  end

end

# alice = User.new
# alice.set_name_to("alice")
# puts alice.get_name

harry = User.new(
    firstname: "Harry", 
    lastname: "Potter"
    )
harry.full_name()

# puts alice
puts harry