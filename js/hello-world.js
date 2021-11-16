"use strict";
var hwt = "Hello Typescript world!";
var dan = "Dan";
//let nbr: string = 0;
console.log(dan, hwt);
var loaded = function (abc) {
    var hw = document.getElementById("hw");
    if (hw !== null) {
        hw.innerText = dan + " " + hwt;
    }
};
