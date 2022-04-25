# Javascript Refresher

An introduction to refresh some points, very important points, about JavaScript, before diving on how to know more about React!

## Reference & Primitive Types

Types of data can be divided into two groups:

1. Primitive: string, boolean and numbers
2. Reference: arrays and objects

References appears when you set a value from a variable to another.

* Example:

    ```sh
    const number = 1;
    const num2 = number; // REFERENCE
    console.log(num2); // 1

    // The object `secondPerson` wont copy the first object, only the pointer
    const person = {
        name: 'Douglas'
    };
    const secondPerson = person;
    console.log(secondPerson) // name: Douglas;

    // If we try to change the name of `person`, the name of `secondPerson` will change as well *POINTER*
    const person = {
        name: 'Douglas'
    };
    const secondPerson = person;
    person.name = 'Aleatório';
    console.log(secondPerson) // name: Aleatório;

    // Its possible to solve this problem creating a new object, however importing all attributes from the first object
    const person = {
        name: 'Douglas'
    };
    const secondPerson = {
        ...person // copying the attributes
    };
    person.name = 'Aleatório';
    console.log(secondPerson); // name: Douglas
    ```

## 'Let' and 'Const'

* let = variable values
* const = constant values

1. The older way to declare variables:

    ```sh
    var myName = 'Douglas';
    console.log(myName); // Douglas
    myName = 'Felipe';
    console.log(myName); // Felipe
    ```

2. The new way to declare variables:

    ```sh
    let myName = 'Douglas';
    console.log(myName); // Douglas
    myName = 'Felipe';
    console.log(myName); // Felipe
    ```

3. Constants:

    ```sh
    const myName = 'Douglas';
    console.log(myName); // Douglas
    myName = 'Felipe';
    console.log(myName); // Will be triggered an error, because once created a constant, the constant can't be edited again.
    ```

## Array functions

1. Old way to declare a function:

    ```sh
    function printMyName(name) {
        console.log(name);
    }
    ```

2. New way to declare a function:

    ```sh
    const printMyNameArrowFunction = (name) => {
        console.log(name);
    }
    printMyName('douglas');
    printMyNameArrowFunction('douglas');

    const printData = number => number * 10;
    const batata = name => {
        console.log(name);
    };

    console.log(printData(10));
    batata('Douglas');
    ```

## Classes

1. How to declare a class on Javascript:

    ```sh
    class Human {
      constructor() {
        this.gender = 'Male';
      }
      printMyGender() {
        console.log(this.gender);
      }
    }
    ```

2. How to use the heritage on Javascript:

    ```sh
    class Person extends Human {
        constructor() {
            super();
            this.name = 'Douglas';
        }
        printMyName() {
            console.log(this.name);
        }
    }

    const person = new Person();
    person.printMyName();
    person.printMyGender();
    ```

3. New way of using classes:

    ```sh
    class Human {
        gender = 'Male';
        printGender = () => {
            console.log(this.gender);
        }
    }

    class Person extends Human {
        name = 'Douglas';
        printName = () => {
            console.log(this.name);
        }
    }

    const person = new Person();
    person.printName();
    person.printGender();
    ```

## Built-in useful Javascript functions

1. **Spread**:
    Used when in need to concatenate something on another structure (arrays and objects).

    ```sh
    * Example 1:
        const numbers = [1, 2 ,3];
        const newNumbers = [...numbers, 4, 5, 6];
        console.log(newNumbers); // 1, 2, 3, 4, 5, 6

    * Example 2:
        const person = {
            name: 'Douglas'
        };
        const person2 = {
            ...person,
            age: 25
        }
        console.log(person2); // Douglas, 25
    ```

2. **Rest**:
    Used when you don't know how many arguments will be passed.

    ```sh
    * Example:
        const filter = (...args) => {
            return args.filter(elemento => elemento === 1);
        }
        console.log(filter(1,2,3)); // 1
    ```

3. **Desconstructing array**
    Used for when you have to catch values inside an array/object.

    ```sh
    * Example 1:
        const numbers = [1,2,3];
        [numb1, numb2] = numbers;
        console.log(numb1, numb2); // 1, 2

    * Example 2:
        const numbers = [1,2,3];
        [num1, , numb3] = numbers;
        console.log(numb1, numb3); // 1, 3

    * Example 3:
        const person = {
            name : 'Douglas'
        }
        const person2 = {...person};
        person2.name = 'Cristina';
        console.log(person.name); // Douglas
    ```

4. **Map**
    Array function which iterates its content and can return something ([click here for more information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).

    ```sh
        const numbers = [1,2,3];
        const doubleNumbers = numbers.map(number => {
           return number * 2;
        });
        console.log(numbers); // 1, 2, 3
        console.log(doubleNumbers); // 2, 4, 6
    ```

5. **Others functions that are really important**
    * [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
    * [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
    * [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    * [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
    * [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
    * [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    * [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## Import / Export

In this new version of Javascript, you can write code in modules:

* To the default `import`, you choose the name
* For the named export, you'll need to use the name defined when the export default was wroted

* Examples for exporting:

    ```sh
    // person.js file | defining export
    const person = {
        name : 'Douglas'
    };
    export default person;
    ```

    ```sh
    // utility.js file | exporting many elements
    export const clean = () => {
        //....
    }
    export const baseNumber = 10; 
    ```

* Examples for importing:

    ```sh
    // importing to app.js
    import person from './person.js'; // using the default keyword from `person.js`
    import prs from './person.js'; // captures the default export and attributes to `prs`
    import { baseData } from './utility.js'; // returns only the `baseData` const from `utility.js`
    import { clean } from './utility.js'; // returns only the `clean` function from `utility.js`
    import { smth as Smth } from '.utility.js'; // although it has a pre-defined name, its possible to define another name
    import * as bundled from './utility.js' // imports everything from a file to an object named `bundled`
    ```
