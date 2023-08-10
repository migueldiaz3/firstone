//console.dir(document);
console.log(document.URL);
console.log(document.title);
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';


var li=document.getElementsByTagName('li');
console.log(li);
li[2].style.backgroundColor='red';
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}

var li=document.getElementsByTagName('li');
console.log(li);
li[1].style.backgroundColor='red';
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';

}