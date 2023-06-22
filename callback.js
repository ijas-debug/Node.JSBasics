var dt=new Date()
console.log(dt)
console.log('hello')
for(i=0;i<1000;i++){
  console.log('Loop')  
}
console.log('end')
var df=new Date()-dt
console.log(df)

function longTask(millSecondTime){
    dt=new Date
    while((new Date-dt) <= millSecondTime){

    }
}

function showEnd(){
    console.log('End')
}

console.log('Started')
setTimeout(showEnd,2000)

console.log('Started')
setTimeout(showEnd,2000)

console.log('Started')
setTimeout(showEnd,2000)


console.log('Started')
longTask(4000)
console.log('End')