
var t_string = ["a", "b", "d"];
//var t_string = ["v", "x"];

console.log(test(t_string))

function test(t_string){
    var suite = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    startpos = suite.indexOf(t_string[0])
    index_t_string = 0;
    for (let index = startpos; index < suite.length; index++) {
        if(t_string[index_t_string] != suite[index]){
            return suite[index];
        }
        index_t_string ++;
    }
}