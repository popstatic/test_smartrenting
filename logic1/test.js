
var number = 98410783562910;
//var number = 09864523148090;

console.log(test(number))

function test(number){
    var suite = ["0","1","2","3","4","5","6","7","8","9"]
    var t_number = number.toString().split('')
    for (let index = 0; index < suite.length; index++) {
        if(!t_number.includes(suite[index])){
            return false
        }  
    }
    return true
}