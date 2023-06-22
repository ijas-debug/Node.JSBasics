

var hello=function(data){
    console.log("Data:"+data)
}

var hey=function(callback){
    console.log('hey working')
    callback('Vamos')
}

hey(hello)