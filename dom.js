//console.dir(document);
console.log(document.URL);
console.log(document.title);
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';


var item=document.getElementsByClassName('list-group-item');
console.log(item);
item[2].style.backgroundColor='green';
for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
}
