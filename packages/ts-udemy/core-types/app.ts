// const person: { name: string; age: number } = {
const person = {
  name: "Samuel",
  age: 20,
  hobbies: ["Sports", "Cooking"],
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
