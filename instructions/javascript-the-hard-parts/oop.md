#Object-Oriented JavaScript
##Working with Object Literals

###Challenge 1/1

Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
-create an empty object
-add a name property to the newly created object with its value being the 'name' argument passed into the function
-add an age property to the newly created object with its value being the 'age' argument passed into the function
-return the object
Using Object.create

###Challenge 1/3

Inside personStore object, create a property greet where the value is a function that logs "hello".

###Challenge 2/3

Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

###Challenge 3/3

Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
##Using the NEW keyword

###Challenge 1/3

Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
Challenge 2/3

Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

###Challenge 3/3

Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

[source](http://csbin.io/oop)
