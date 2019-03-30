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

var info=store.getAll();
info.onsuccess=function(data){
  console.log(data.target.result);
  display(data.target.result);
}
}
var parent=document.querySelector(".parent");
function display(d){
  for(i=0;i<d.length;i++){
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/user.svg";
    image.alt=d[i].name;
    var name=document.createElement("h2");
    name.textContent=d[i].name;
    //child.append(image);
    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
    link.textContent="view profile";
  //  child.append(link);
  //  var head=document.createElement("h3");
    //head.innerHTML=d[i].name;
    //child.append(head);
    child.append(image);
    child.append(name);
    child.append(link);
    parent.append(child);

  }

}
