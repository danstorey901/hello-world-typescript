export class Friend {
    name: string = '';
    age: number = 0;
    email: string = '';
    bff: boolean = false;

constructor(name: string, age: number, email: string, bff: boolean = false) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.bff = bff;
}

print(): string {
    return ` ${this.name} | ${this.age} | ${this.email} | ${this.bff}`;
}
static printHeader(): string {
   return 'name | age | email | email';
}
}

/*Class Friend {
    name: age: email: bff:;
    constructor(name: age: email: bff;)
}

console.log(Friend);
*/