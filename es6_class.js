class Hello{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }

    hello(){
        console.log('Hello friends'+(this.num1+this.num2))
    }
}
let hey=new Hello(10,20)
hey.hello()