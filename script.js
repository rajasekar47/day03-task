//1. How to compare two JSON have the same properties without order?
// a. let obj1 = { name:"Person 1", age:5 };
// b. let obj2 = { age:5, name:"Person 1"};
// ANSWER:
let obj1 = { name:"Person 1",age:5};
let obj2 = { age:5, name:"Person 1"};
JSON.stringify(obj1) === JSON.stringify(obj2)
if(obj1 === obj2){
    console.log("True")
}
else{
    console.log("False")
}

//2. API URL- ALL THE COUNTRY FLAGS
//ANS:

var request= new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){ 
var result=JSON.parse(request.response);
console.log(result);
for (var i=0; i<result.length;i++){
    console.log(result[i].flags.png,result[i].name.common,);
    }
}

//3. API URL- ALL COUNTRIES NAMES, REGIONS,SUBREGION AND POPULATION
//ANS:

var x=new XMLHttpRequest();
x.open('GET',"https://restcountries.com/v3.1/all",true);
x.send();
x.onload=function(){
     let data=JSON.parse(this.response);
     console.log(data);
     for (let i = 0; i<data.length; i++)
     {
     console.log(`counrty name:${data[i].name.common},
      region:${data[i].region},
      subregion:${data[i].subregion},
       population:${data[i].population}`);
     }
  
}