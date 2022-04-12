var heading= document.createElement("h1");
heading.innerHTML="NATIONALIZE"
var label=document.createElement("label");
label.innerHTML="Enter your Name";
label.setAttribute("for","text");
var br=document.createElement("br");
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required",true);
var br1=document.createElement("br");
var button=document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="Search";
document.body.append(heading,label,br,input,br1,button);
async function foo(){
    try{
        var ele1 = document.createElement("p");
        var ele2 = document.createElement("p");
        let cc=document.getElementById("text").value;
        let res= await fetch(`https://api.nationalize.io?name=${cc}`);
        let res1= await res.json();     
        ele1.innerHTML=`Country 1: ${res1.country[0].country_id} / Probability: ${res1.country[0].probability}`
        ele2.innerHTML=`Country 2: ${res1.country[1].country_id} / Probability: ${res1.country[1].probability}`;
        document.body.append(ele1,ele2);
    }catch(error){
    console.log(error);
    }
}