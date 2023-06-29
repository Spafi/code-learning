{
    /* VARIABLES

        By convention, variable names use camelCase, 
        first word starts with a small letter, 
        and consecutive words with a capital one
        like message, yourAge, and myName.
    */

    // Declaring a variable

    // 'var' is not used anymore
    // DON'T USE var!!!
    var aVariable = 'I am a variable';

    // To declare a variable we should use 'let' instead
    let anotherVariable = 'I am also a variable';

    // To declare a variable that CAN'T change, we use 'const'
    const iCantChange = 3.14;

    /* 
	If we want to change a value of our previous variables
	We can do that with the 'let' variable
	*/
    anotherVariable = 'Hello, I changed';

    /*
	But if we try to change the value of the 'const' variable
	We would get an error
	*/
    // iCantChange = 'something else'  // We would get an error here

    /*
	SUMMARY

	A variable is a label that references a value.
	Use the let keyword to declare a variable.
	Use the const keyword to define a readonly reference to a value.
    */
}
// --------------------------------------------------------------

{
    // DATA TYPES

    let aString = 'Salam';                // aString is a string

    let aNumber = 25;                     // age is a number

    let likesBananas = true;              // likeBananas is a boolean

    let hobbies = ['hiking', 'running'];  // hobbies is a list of strings

    let person = {
        name: 'John',
        age: 24,
    };                                    // person is an object with 2 properties

    // If we want to get the name property from the person, we can acces it with a '.'
    let personName = person.name; // personName = 'John'

    // If we want to update a property of person we can do
    person.name = 'Gheorghe';

    /* Now person is
	{
		name: 'Gheorghe',
		age: 24
	}
	*/
}
// --------------------------------------------------------------

{
    // CONDITIONALS
    // We can execute different parts of our code with a condition

    let temperature = 20;

    if (temperature > 15) {
        // if temperature is > 15 ONLY this part will be executed
        console.log('no jacket needed');
    } else {
        // else, ONLY this part will be executed
        console.log('take a jacket');
    }

    /* JavaScript provides three logical operators:

			 ! (Logical NOT)
			|| (Logical OR)
			&& (Logical AND)
	*/
    let isRaining = false;

    // TWO WAYS TO USE MULTIPLE EXPRESSIONS

    // METHOD 1
    if (temperature > 15 && isRaining) {
        console.log('no jacket needed, but take an umbrella');
    } else if (temperature > 15 && !isRaining) {
        console.log('no jacket needed, no umbrella needed');
    } else if (temperature <= 15 && isRaining) {
        console.log('take a jacket and an umbrella');
    } else {
        console.log('take a jacket, but no umbrella');
    }

    // METHOD 2
    if (temperature > 15) {
        if (isRaining) {
            console.log('no jacket needed, but take an umbrella');
        } else {
            console.log('no jacket needed, no umbrella needed');
        }
    } else {
        if (isRaining) {
            console.log('take a jacket and an umbrella');
        } else {
            console.log('take a jacket, but no umbrella');
        }
    }
}
// --------------------------------------------------------------

{
    // CODE BLOCKS

    let variableAtTop = 'i can appear down the line';

    {
        console.log(variableAtTop);               // i can appear down the line';

        let variableDeep = 'i am inside many code blocks';
                     
        // we can use variableDeep here
	console.log(variableDeep);               //i am inside many code blocks';
    }
    // we can use variableAtTop here
    console.log(variableAtTop);                  // i can appear down the line';

    // we CAN'T use variableDeep here
    // console.log(variableDeep);                // ERROR
}
// --------------------------------------------------------------

{
    // ARRAYS CONTINUATION

    // Each element of an array has an index, starting with 0
    let users = [
        'Daniel',    // index 0
        'Earl',      // index 1
        'Virgie',    // index 2
        'Augusta',   // index 3
        'Elva',      // index 4
        'Julia',     // index 5
        'Cole',      // index 6
    ];

    // If we want to get an element at a specific index we can do
    const firstElement = users[0];   // Daniel
    const secondElement = users[1];  // Earl
    const lastElement = users[6];    // Cole

    // Each array has a property named length that stores the length of the array (how many elements are in it)
    // If we want to see how many elements we have in the array we can do
    let usersCount = users.length;     // usersCount =  7, because we have 7 users in the array

    // Each array has also some premade functions for manipulating the data (adding, removing, updating, etc...)

    // If we want to add another user in the array we can use the method 'push()  -> array.push(element)'

    // create a user
    const newUser = 'Salam';

    // Call the 'push()' method on our array
    users.push(newUser); // Now, our users array has one more user, 'Salam'
    /*    
    let users = [
        'Daniel',    // index 0
        'Earl',      // index 1
        'Virgie',    // index 2
        'Augusta',   // index 3
        'Elva',      // index 4
        'Julia',     // index 5
        'Cole',      // index 6
	'Salam',     // index 7    <-- our new user
    ];
    */
    // If we check the length property now, it will be 8 because we added a new user
    console.log(users.length)  // 8
 
    // If we want to remove the last user in the array we can use the method 'pop()  -> array.pop()'

    // Call the 'pop()' method on our array
    users.pop(); // Now, our users array doesn't have the user 'Salam'

    // NOTE: Arrays have more methods predefined
}
// --------------------------------------------------------------

{
    // LOOPS
    let users = [
        'Daniel',    // index 0
        'Earl',      // index 1
        'Virgie',    // index 2
        'Augusta',   // index 3
        'Elva',      // index 4
        'Julia',     // index 5
        'Cole',      // index 6
    ];

    // We have multiple methods to iterate over an array

    // A simple for loop that uses 
    for (let index = 0; index < users.length; index++) {
        console.log(users[index]);
    }

    // A for of loop (newer method)
    for (let user of users) {
        console.log(user);
    }

    // The forEach method that is present on arrays (like push(), pop(), etc...)
    users.forEach(user => console.log(user));
}
// --------------------------------------------------------------

{
    // STRING TEMPLATES

    const userName = 'Jonathan';

    const userAge = 23;

    const favoriteAnimal = 'cat';

    const favoriteFood = 'pizza';

    // If we want to use a variable in a string, the old and ugly way is like this:

    const oldWay =
        userName +
        ' is ' +
        userAge +
        ' years old! His favorite animal is ' +
        favoriteAnimal +
        ', and he likes to eat ' +
        favoriteFood;

    // The new way uses `` in place of '' or "" and ${} around inserted variables
    const newWay = `${userName} is ${userAge} years old! His favorite animal is ${favoriteAnimal}, and he likes to eat ${favoriteFood}`;

    // Both oldWay and newWay will display
    // Jonathan is 23 years old! His favorite animal is cat, and he likes to eat pizza!
}
// --------------------------------------------------------------

{
    // FUNCTIONS

    // The declaration of a function is like a blueprint that says what will happen when we call the function later

    function aFunction() {
        // Do something
        console.log('In a function');
    }

    // When we call a function, it will go to the declaration and figure out what to do, in our case it logs to the console "In a function" 
    aFunction();

    // A function that displays 'Hello, user!' for a passed user
    function greetUser(username) {
        let greeting = `Hello, ${username}!`;
        console.log(greeting);
    }

    // If we want to do something with the greetUser function, we need to call it

    // We create a user
    const user = 'Marcel';

    // We call the greetUser function for user
    greetUser(user);



    // A nested function

    // We can declare another function that uses our previous function

    function greetUsersFromList(usersList) {
        for (let user of usersList) {
            greetUser(user);  // our previous function
        }
    }

    // And call it for a list of users

    let users = [
        'Daniel',    // index 0
        'Earl',      // index 1
        'Virgie',    // index 2
        'Augusta',   // index 3
        'Elva',      // index 4
        'Julia',     // index 5
        'Cole',      // index 6
    ];

    greetUsersFromList(users);  // will log to the console "Hello, user!" for each user in the list ("Hello, Daniel!", "Hello Earl!", ...)
}
// --------------------------------------------------------------

{
    // ARROW FUNCTIONS

    // We can convert a function in an arrow function like
    function aClassicFunction(parameter1, parameter2) {
        return parameter1 + parameter2;
    }

    const anArrowFunction = (parameter1, parameter2) => parameter1 + parameter2;

    // If we call the functions, they will do the same thing
    console.log(aClassicFunction(3, 5));  // 8
    console.log(anArrowFunction(3, 5));   // 8
}
