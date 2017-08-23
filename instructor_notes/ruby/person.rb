

class Person 

    attr_accessor :name
    attr_reader :age
    @@count

    def initialize(name: nil, age: 0, is_loud:)
        @name = name
        @age = age
        @is_loud = false
    end

    def say_name
        puts @name
    end

    def is_old_enough_to_vote?
        @age >= 18 
    end

    def is_older_than?(other_person)
        @age > other_person.person
    end

    def self.count
        @@count
    end

end


class LoudPerson < Person
    def is_loud
        super
        
    def say_name
    puts "HEY YOU, MY NAME IS #{@name.upcase}"
    end
end



burns = Person.new(
    name: 'Burns', 
    age: 24
    )

jess = Person.new(
    name: 'Jess',
    age: 28
)

puts burns.name

puts burns.name = 'Jessica'

puts burns.say_name
puts burns.is_old_enough_to_vote?

puts "Number of people: + #{Person.count}"

puts burns.is_older_than?(jess)