## JavaScript Fundamentals

#### What you should know after this chapter:
1. General history of JavaScript
    * [JavaScript's History (I know you can find this boring, but you should read it)](http://www.howtocreate.co.uk/jshistory.html)
2. Variables and functions (Including hoisting and first-class functions)
    * [JavaScript Variables](http://www.tutorialspoint.com/javascript/javascript_variables.htm)
    * [Variable and function hoisting](http://adripofjavascript.com/blog/drips/variable-and-function-hoisting)
    * [EloquentJS - Program structure] (http://eloquentjavascript.net/02_program_structure.html)
    * [EloquentJS - Functions] (http://eloquentjavascript.net/03_functions.html)
    * [StackOverflow - What is meant by first class object?](http://stackoverflow.com/questions/705173/what-is-meant-by-first-class-object)
    * [What exactly is a first class function and why you should care](http://www.i-programmer.info/programming/theory/5933-what-exactly-is-a-first-class-function-and-why-you-should-care.html)
3. Data types, structures and JavaScript's grammar (syntax)
    * [JS: Good Parts (Chapter 2, 3, 6)](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
    * [EloquentJS - Values, types and operators](http://eloquentjavascript.net/01_values.html)
    * [EloquentJS - Data structures](http://eloquentjavascript.net/04_data.html)
4. Scopes and closures
    * [Your don't know JS: Scope and Closures](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)
    * [Everything you wanted to know about JavaScript scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)
    * [StackOverflow (What is the scope of variables in JavaScript?)](http://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript)
    * [Let's learn JavaScript Closures (A little more difficult, but worth reading)](https://medium.freecodecamp.com/lets-learn-javascript-closures-66feb44f6a44#.5gctecddl)
    * [Why understanding scope and closures matter] (http://doctrina.org/JavaScript:Why-Understanding-Scope-And-Closures-Matter.html)
    * [StackOverflow (How do JavaScript closures work)](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
    * [JavaScript closures demystified](https://www.sitepoint.com/javascript-closures-demystified/)
5. Objects, prototypes and "this"
    * [Back to basics: JavaScript Object Syntax](https://www.sitepoint.com/back-to-basics-javascript-object-syntax/)
    * [JavaScript: Good Parts (Chapter 3)](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
    * [You Don't Know JS - this & Object Prototypes (Very good position)](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
    * [Eloquent JavaScript - The secret life of objects](http://eloquentjavascript.net/06_object.html)
    * [Gentle explanation of this in JavaScript](http://rainsoft.io/gentle-explanation-of-this-in-javascript/)
6. JSON
    * [w3schools - JSON](http://www.w3schools.com/json/)
7. Higher-order functions
    * [EloquentJS - Higher-order functions](http://eloquentjavascript.net/05_higher_order.html)
    * [Tidying Up a JavaScript Application with higher-order functions](http://blog.carbonfive.com/2015/01/05/tidying-up-a-javascript-application-with-higher-order-functions/)
    * [Catching up with JavaScript higher-order functions](https://www.airpair.com/javascript/posts/catching-up-with-javascript-higher-order-functions)
    * [Higher-order functions in JavaScript] (https://www.sitepoint.com/higher-order-functions-javascript/)

You should also read this books (not only chapters mentioned by me):
* [JavaScript: The Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
* [Eloquent JavaScript] (http://eloquentjavascript.net/index.html)
* [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)

And also I'm encouraging you to find some articles on your own :)

***

#### JavaScript Fundamentals - Exercises

In this chapter exercises are mostly algorithmic to teach you how to think like a programmer and to teach you good practices about programming in JavaScript.
Remember to use higher-order functions (like reduce, map, filter) whenever you can. After writing a code look at it again and think twice if it can't be better.

##### FizzBuzz
Write a function which will log to console numbers from 1 to 100. For numbers divisible by 3 instead of number log word 'Fizz', for numbers divisible by 5 log word 'Buzz' and for 
numbers divisible by both (3 and 5) log 'FizzBuzz'.

It should work like that:
```
fizzBuzz();
1
2
Fizz
4
Buzz
Fizz
7
8
....
```

Write also function called 'WoozyBoozy' that will be similar to 'FizzBuzz' BUT this time it will take parameters. First parameter will be config object telling function what words we want to
log to console and when, second parameter will be for how many numbers we want to log this.

It should look something like this:
```
woozyBoozy({
'Fizz': 3,
'Buzz': 5,
'Wooz': 7
}, 200);
```

##### reverseString

Write a function 'reverseString' that will take string and reverse it like for example that:
```
console.log( reverseString('Greetings from Earth) );
"htraE morf sgniteerG"
```

##### factorialize

Write a function 'factorialize' which will return factorial of provided integer, example:
```
console.log( factorialize(5) );
'120'
```

Factorials are represented by shorthand notation: n!
For example 5! = 1 * 2 * 3 * 4 * 5 = 120;

##### findLongestWord

Write a function 'findLongestWord' which will return longest word from string, for example:

```
console.log( findLongestWord(''May the force be with you) );
'force';
```

If there is more then one longest word then log first one found by function.

##### truncateString

Write a function 'truncateString' which will take two parameters. First one will be the string, second one will be number.
Then function will truncate string to proper length and add three dots at the end of string.
For example:
```
console.log( truncateString('May the force be with you', 8) );
'May the ...'
```

##### bouncer

Write a function 'bouncer' which will remove all falsy values from provided array, for example:
```
bouncer([7, "ate", "", false, 9]);
[7, "ate", 9];
```

##### destroyer

Write function 'destroyer' which will remove from provided array some numbers. Amount of numbers is unknown.
For example:

```
destroyer([1,2,3,1,2,3], 2, 3);
[1, 1]

OR

destroyer([3,5,1,2,2], 2, 3, 5);
[1]
```

