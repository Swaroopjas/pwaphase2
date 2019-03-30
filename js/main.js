function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var phoneno=document.querySelector("#phoneno").value;
  var addres=document.querySelector("#addres").value;
  var email=document.querySelector("#email").value;

  //graduation
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var gpercentage=document.querySelector("#gpercentage").value;
  //intermediate
  var iinstitute=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyear=document.querySelector("#iyear").value;
  var ipercentage=document.querySelector("#ipercentage").value;

//ssc
  var sinstitute=document.querySelector("#sinstitute").value;
  var sboard=document.querySelector("#sboard").value;
  var syear=document.querySelector("#syear").value;
  var spercentage=document.querySelector("#spercentage").value;

  //skills

  var skills=document.querySelector("#skills").value;

  //indexDB implepentation

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
store.put({
  career:career,
  name:name,
  phoneno:phoneno,
  email:email,
  addres:addres,
  education:[

  {
  institute:ginstitute,
  branch:gbranch,
  year:gyear,
  percentage:gpercentage
},


  {
    institute:iinstitute,
  branch:ibranch,
  year:iyear,
  percentage:ipercentage
},

  {
    institute:sinstitute,
  branch:sboard,
  year:syear,
  percentage:spercentage
}
],

skills:skills

});

}
window.open("index.html");

}
