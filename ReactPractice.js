//## Beginner Level

// 1. Introduction to React

// What is React?
// Key features of React
// Differences between React and other frameworks (e.g., Angular, Vue)
// JSX

// What is JSX?
// Advantages of using JSX
// JSX vs. HTML


// 2. Components

// Functional Components vs. Class Components
// Component lifecycle methods (for class components)
// Creating and rendering components
// Props and State

// What are props?
// What is state?
// Differences between props and state
// Prop drilling and state management
// Event Handling

// Handling events in React
// Synthetic events
// Event binding
// Conditional Rendering

// How to conditionally render components
// Using ternary operators and logical &&
// Lists and Keys

// Rendering lists
// Importance of keys in lists
// Forms and Controlled Components

// Handling forms in React
// Controlled vs. uncontrolled components


// Basic Hooks

// useState
// useEffect

// function Person(name = 'a', age = 2) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//     };
// }

// let john = new Person("john", 23);
// let dhiraj = new Person("dhiraj", 24);
// let namah = new Person();

// john.greet();   
// dhiraj.greet();
// namah.greet();  

//UseState useState
// useState is a React Hook that lets you add a state variable to your component.

// **Usage
// Adding state to a component
// Updating state based on the previous state
// Updating objects and arrays in state
// Avoiding recreating the initial state
// Resetting state with a key
// Storing information from previous renders

// useState returns an array with exactly two items:

// The current state of this state variable, initially set to the initial state you provided.
// The set function that lets you change it to any other value in response to interaction.

// function handleClick() {
//     setAge(age + 1); // setAge(42 + 1)
//     setAge(age + 1); // setAge(42 + 1)
//     setAge(age + 1); // setAge(42 + 1)
//   }


// function handleClick() {
//     setAge(a => a + 1); // setAge(42 => 43)
//     setAge(a => a + 1); // setAge(43 => 44)
//     setAge(a => a + 1); // setAge(44 => 45)
//   }


// React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

// a => a + 1 will receive 42 as the pending state and return 43 as the next state.
// a => a + 1 will receive 43 as the pending state and return 44 as the next state.
// a => a + 1 will receive 44 as the pending state and return 45 as the next state.
// There are no other queued updates, so React will store 45 as the current state in the end.

// By convention, it’s common to name the pending state argument for the first letter of the state variable name, like a for age. However, you may also call it like prevAge or something else that you find clearer.

 

