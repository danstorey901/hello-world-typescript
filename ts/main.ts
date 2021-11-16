import { Friend } from "./friends";

let friends: Friend[] = [
    new Friend("Jess", 32, "Jess@hotmail.com", true),
    new Friend("Dan", 28, "Dan@hotmail.com", true),
    new Friend("Tyler", 24, "Tyler@hotmail.com", true),
    new Friend("Jon", 35, "Jon@hotmail.com", true),
    new Friend("Joe", 25, "Joe@hotmail.com", true),
    new Friend("Josh", 30, "Josh@hotmail.com", false)
];

console.log(Friend.printHeader());
for(let friend of friends) {
    console.log(friend.print());
}