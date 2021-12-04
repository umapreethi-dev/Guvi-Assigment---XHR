var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log( _.isEqual(obj1, obj2));// using Lodash

function isEqual(obj1,obj2){
   console.log( obj1.name === obj2.name);
    console.log(obj1.age === obj2.age);
}

isEqual(obj1,obj2);

let flags = document.getElementById("flags");

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status <=300){
        let data = JSON.parse(this.response);
       // console.log(data);
       
        for(let i = 0; i < data.length; i++){
            console.log("Flags:", data[i].flags); 
            console.log("Name:", data[i].name);
            console.log("Population:",data[i].population);
            console.log("Region:", data[i].region);
           console.log("Sub Region:", data[i].subregion);
            
        }
    } else {
        console.log(this.response);
    }
};