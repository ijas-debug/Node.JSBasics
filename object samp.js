var Person={name:"Gavi", age:18,place:"Barcelona",
display:function(){
    console.log(this.name)
}}

for(x in Person){
    console.log(Person[x])
}

console.log(Person['age'])

Person.name="Pedri"
console.log(Person)

Person.dob="20-10-2000" 

Person.displayAge=function(){
    console.log(this.age)
}



console.log(Person.displayAge())