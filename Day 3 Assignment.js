//How to compare two JSON have the same properties without order?

var obj1 ={ name: "Person 1", age:5 };
var obj2 ={ age:5, name: "Person 1" };

var flag = true;

if (Object.keys(obj1).length==Object.keys(obj2).length){
for(let key in obj1){
if(obj1[key]==obj2[key]){
    continue;

}
else {
flag=false;
break;
}
}
}
else{
    flag = false;
}
console.log(flag);


//Use the rest countries API URL->https://restcountries.eu/rest/v2/all and display the country flags in console.


const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")

request.send()
request.onload=function()
{
if (request.status==200)
{
    let c= JSON.parse(request.responseText)
    c.map((m)=>{

        console.log(m.flags.png)
    })

}else
{
request.onerror=function()
{
    console.log("site is error")
}}}


// Use the same rest countries and print all countries names, regions, sub-region and populations.

const request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all")

request1.send()
request1.onload=function()
{
if (request1.status==200)
{
    let a= JSON.parse(request1.responseText)
    a.map((b)=>{

        console.log(b.name.official)
    });

    a.map((c)=>{

        console.log(c.region)
    });

    a.map((d)=>{

        console.log(d.subregion)
    });


    a.map((e)=>{

        console.log(e.population)
    });

}else
{
request1.onerror=function()
{
    console.log(error)
}}}