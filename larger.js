var r=require('readline-sync')

num1=r.question('Enter first number')
num2=r.question('Enter second number')

if(num1>num2){
    console.log('larger is '+num1)
}
else if(num1===num2)
{
    console.log('Numbers are equal')
}
else{
    console.log('larger is '+num2)
}