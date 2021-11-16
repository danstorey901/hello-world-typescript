
let hwt = "Hello Typescript world!";
let dan = "Dan";
//let nbr: string = 0;

console.log(dan, hwt);

const loaded = (abc: string): void => {
    let hw = document.getElementById("hw");
    if(hw !== null) {
        hw.innerText = `${dan} ${hwt}`
    }
}