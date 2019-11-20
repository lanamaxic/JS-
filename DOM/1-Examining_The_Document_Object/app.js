let val;
val = document;
//val = document.all;
//val = document.all.length;
//val = document.all[2];
//val = document.head;
//val = document.body;
//val = document.doctype;
//val = document.domain;
//val = document.URL;
//val = document.charset;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
//val = document.forms[0].action;



val = document.links;
val = document.links[0];
document.links[0].id = 'Jack'
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts;
val = document.scripts[2]
.getAttribute('src');   
let scripts = document.scripts;
let scriptsArr = Array.from(scripts)


scriptsArr.forEach(function(item) {
    console.log(item.getAttribute('src'))
});

