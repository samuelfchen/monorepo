const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  // const person = {
  name: "Samuel",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
