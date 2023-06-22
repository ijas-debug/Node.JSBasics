function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function()
{
    console.log("Name: "+this.name+ " Age: "+this.age + " Place: "+this.place)
}
}

var leo=new Person("Leo",35,"Rosario")
var Alvarez=new Person ("Julian Alvarez",21,"Manchester")

leo.display()
Alvarez.display()