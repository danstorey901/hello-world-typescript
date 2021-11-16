"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friends_1 = require("./friends");
var friends = [
    new friends_1.Friend("Jess", 32, "Jess@hotmail.com", true),
    new friends_1.Friend("Dan", 28, "Dan@hotmail.com", true),
    new friends_1.Friend("Tyler", 24, "Tyler@hotmail.com", true),
    new friends_1.Friend("Jon", 35, "Jon@hotmail.com", true),
    new friends_1.Friend("Joe", 25, "Joe@hotmail.com", true),
    new friends_1.Friend("Josh", 30, "Josh@hotmail.com", false)
];
console.log(friends_1.Friend.printHeader());
for (var _i = 0, friends_2 = friends; _i < friends_2.length; _i++) {
    var friend = friends_2[_i];
    console.log(friend.print());
}
