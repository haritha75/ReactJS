// export default function DoSomething() {}

// // arrow function

// export const DoSomething = () => {

// };
// // ternary operator

// let age =10;
// let name = "Pedro";

// if(age>10){
//   name = "Pedro"
// }else{
//   name="Jack"
// }
// // another way

// let name1 = age>10?"Pedro":"Jack";

// const component = () =>{
//   return age>10?<div>Pedro</div>:<div>Jack</div>
// };

const person = {
  name: "Pedro",
  age: 20,
  isMarried: false,
};

const name2 = person.name;
const age2 = person.age;
const isMarried1 = person.isMarried;

// another way

const { name, age, isMarried } = person;

const person4 = { ...person, name: "Jack" };

const names = ["Pedro", "Jack", "Jessica"];

const name5 = [...names, "Joel"];

// map,filter,reduce to maniputa arrays

names.map((name) => {
  console.log(name);
});

names.map((name) => {
  return name + "1";
});
names.map((name) => {
  return <h1>name + "1"</h1>;
});

names.map((name) => {
  return name !== "Pedro";
});

// async ,await,fetch,promises
