// // //console.dir(document);
// // console.log(document.URL);
// // console.log(document.title);
// // var headerTitle=document.getElementById('header-title');
// // var header=document.getElementById('main-header');
// // header.style.borderBottom='solid 3px #000';


// // var li=document.getElementsByTagName('li');
// // console.log(li);
// // li[2].style.backgroundColor='red';
// // for(var i=0;i<li.length;i++){
// //     li[i].style.fontWeight='bold';
// // }

// // var li=document.getElementsByTagName('li');
// // console.log(li);
// // li[1].style.backgroundColor='red';
// // for(var i=0;i<li.length;i++){
// //     li[i].style.fontWeight='bold';
// // }

// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // for (var i=0;i<odd.length;i++){
// //     odd[i].style.backgroundColor='green';

// // 
var itemlist=document.querySelector('#items');
// // console.log(itemlist.parentNode);
// // itemlist.parentNode.style.backgroundColor='#f4f4f4';

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';

// console.log(itemlist.children);
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.style.backgroundColor="yellow";

// console.log(itemlist.children);
// console.log(itemlist.firstElementChildElementChild);
// itemlist.firstElementChild.style.backgroundColor="green";

// console.log(itemlist.children);
// console.log(itemlist.nextSibling);
// itemlist.nextSibling.style.backgroundColor="green";

// console.log(itemlist.children);
// console.log(itemlist.previousSibling);
// itemlist.previousSibling.style.backgroundColor="red";

var newDiv=document.createElement('div');
newDiv.className='HEllo'
newDiv.setAttribute('title', 'HEllo');
var newDivText=document.createTextNode('Hello');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);



 
 