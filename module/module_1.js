const person = {
    name: "raghav",
    id: 1
}
class Person {
    constructor (x,y){
        this.num1 = x;
        this.num2 = y;
    }
    doIt(){
        return '('+this.x+this.y+')';
    }
}
const hi = new Person(5,6);
const raghav = (c) => {
    return console.log(c);
}
module.exports.raghavFunction = raghav;
module.exports.hi_1 = hi;
module.exports.person_1 = person;
