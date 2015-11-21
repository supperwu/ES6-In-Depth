/**
 * Created by jerry on 2015/11/21.
 */

var myArray = ['Andy', 'Jackey', 'Timothy', 'Bowen'];

//use for
for (var index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    break;
}

//use forEach
myArray.forEach(function(item){
    console.log(item);
    //can't use break
    //break;
});

//use for in bad method
Object.defineProperty(myArray,'name',{value:'Friends',enumerable :true});
for(var index in myArray){
    console.log(typeof index); //string
    console.log(myArray[index]);
    break;
}