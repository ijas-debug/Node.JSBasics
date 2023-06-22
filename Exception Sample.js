var r=require('readline-sync')

num1=r.question('Enter first number')
num2=r.question('Enter second number')

try{
    var sum =num1/num2
    console.log(sum)
}
catch(exception)
{
 console.log("Enter valid Number")
}
finally{
    console.log("Finally block will allways work")
}