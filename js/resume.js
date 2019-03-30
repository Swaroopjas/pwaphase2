var para;
var paravalue;
var query=window.location.search.substring(1).split("?");

for(var i in query)
{
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;

if(!idb in window){
  console.log("indexedDB not supported");
}

//indexedDB cereation
var request;
var store;
var open=idb.open("storeData",1);

console.log("Indexedb is created");
open.onupgradeneeded=function(e){
var request=e.target.result;
store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("store created");
}
open.onerror=function(error){
console.log("on error is occured");
}
open.onsuccess=function(e)
{
request=e.target.result;
var tx=request.transaction("formdata","readwrite");
store=tx.objectStore("formdata");

var info=store.get(paravalue);
info.onsuccess=function(data){
  console.log(data.target.result);
  personalInfo(data.target.result);

}
}


var left=document.querySelector(".left");
var right=document.querySelector(".right");


function personalInfo(pi){




var image=document.createElement("img");
image.src="images/user.svg";
image.alt=pi.name;
left.append(image);

var nama=document.createElement("h1");
nama.textContent="name";
left.append(nama);

var h1=document.createElement("hr")
left.append(h1);



var name=document.createElement("h2");
name.textContent=pi.name;
left.append(name);

var coaoooo=document.createElement("hr");
left.append(coaoooo);


var naman=document.createElement("h1");
naman.textContent="contact no";
left.append(naman);

var h1=document.createElement("hr")
left.append(h1);





var phoneno=document.createElement("phoneno");
phoneno.textContent=pi.phoneno;
 left.append(phoneno);

 var coaoo=document.createElement("hr");
 left.append(coaoo);

 var na=document.createElement("br");
 left.append(na);


 var emai=document.createElement("h2");
 emai.textContent="email";
  left.append(emai);

  var ha=document.createElement("hr");
  left.append(ha);



 var email=document.createElement("mail");
 email.textContent=pi.email;
  left.append(email);

  var nr=document.createElement("br");
  left.append(nr);

  var coao=document.createElement("hr");
  left.append(coao);

  var addre=document.createElement("h2");
  addre.textContent="adress";
   left.append(addre);

   var coa=document.createElement("hr");
   left.append(coa);



  var addres=document.createElement("address");
  addres.textContent=pi.addres;
   left.append(addres);


   var car=document.createElement("h1");
   car.textContent="Career Objective";
   right.append(car);

var ca=document.createElement("hr");
right.append(ca);


   var career=document.createElement("career");
   career.textContent=pi.career;
    right.append(career);


   var education=document.createElement("h1");
   education.textContent="Education Details";
   right.append(education);

   var edu=document.createElement("hr");
   right.append(edu);



   var table=document.createElement("table");
   table.border="1";


   var  tr1="<tr><th>institute</th> <th>branch</th> <th>percentage</th> <th>year</th></tr>";
   var tr2="";


   for(var i in pi.education)
   {
     tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td>"+
     "<td>"+pi.education[i].branch+"</td>"+
     "<td>"+pi.education[i].percentage+"</td>"+
     "<td>"+pi.education[i].year+"</td></tr>"
   }
   table.innerHTML=tr1+tr2;

   right.append(table);

   var skill=document.createElement("h1");
   skill.textContent="skills";
   right.append(skill);

   var skil=document.createElement("hr");
   right.append(skil);

   var skills=document.createElement("skills");
   skills.textContent=pi.skills;
   right.append(skills);
 }
