//basic arrow function format:
//const functionName = (argument) => thing to do to argument;

/* const sayHello = function() {
  console.log("hello");
};
 */
//one line function has no need for braces
//const sayHello = () => console.log("hello");

//this function returns without stating return
//const sayHello = () => "returns hello";

//return an object:to use an arrow function with a template literal, wrap the object in parenthesis
//const sayHello = () => ({ msg: "hello" });

//pass an argument for the arrow functionin the where the () would go, single parameter does not need ()
//const sayHello = name => {
// return console.log(`hello ${name}`);
//};

//multiple parameters need ()
const sayHello = (firstName, lastName) => {
  return console.log(`hello ${firstName} ${lastName}`);
};

sayHello("Patrick", "Denney");
//console.log(sayHello());
