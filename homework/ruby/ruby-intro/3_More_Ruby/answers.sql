
### Short Answer Questions:

Answer should be no more than a couple of sentences. Refer to the reading.

1. According to Metz, what is Object-oriented design about?
-Its about Managing dependencies;
-not following fixed set of rules but, using tools, principles and patterns.

2. What does SOLID stand for?
S - Single-responsiblity principle: a class should only have one job
O - Open-closed principle: open for extention, closed for modification.
L - Liskov substitution principle: every subclass should be substitutable for their parent class.
I - Interface segregation principle: A client should never be forced to have UI that it doesnt use
    and clients shouldnt be forced to depend on methods they dont use.
D - Dependency Inversion Principle: high level module must not depend on the low level module, but they should depend on abstractions.


3. Ruby is a class-based object-oriented language. What does that mean?
Ruby combines data and behavior in a single object where as other languages 
divide them into two seperate never-meeting objects


4. Where are methods defined in Ruby?
Methods are defined in classes


5. Why does single Responsibility matter?
A class that has more than one responsibility is difficult to reuse and you increase your applications chances of breaking 
if you depend on classes that do too much 


6. What does `attr_reader` do?
With instance variables, you can make them accessible 
or not with attr_reader outside of the class.
if you do this: 
class Person
  def initialize(name)
    @name = name
  end
end
you cant change thename of the person but if you use attr_reader you can:
class Person
  attr_reader :name
  attr_writer :name
  def initialize(name)
    @name = name
  end
end


7. What are 4 benefits Metz outlines for methods that have a single responsibility?
1) expose previously hidden qualities
2) avoid the need for comments
3) encourages reuse
4) easy to move to another class



8. What are 4 things an object knows when it has a dependency?
1) the name of another class
2) the name of a message that it intends to send to someone other than self
3) the arguements that a message requires
4) the order of those arguemnts 


9. Dependency management is core to creating future-proof applications. 

What does injecting dependencies and isolating dependencies do? 
injecting: Basically, instead of having your objects creating a dependency or asking a factory object to make one for them, you pass the needed dependencies in to the object externally, and you make it somebody elses problem. 
isolationg:


What are their benefits?
dependency injection is that it can make testing lots easier
