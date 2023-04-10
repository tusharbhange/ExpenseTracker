// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.title =123
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// var headTitle =document.getElementById('main-header');
// headTitle.textContent = "New Title";
// headTitle.innerText="Hello !!!"
// headTitle.style.borderBottom="solid 3px #000"


var items = document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1]);
items[1].textContent="Hello 2";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='green';

// items.style.backgroundColor='#f4f4f4';

// for(var i=0; i<items.length;i++)
// {
//     items[i].style.backgroundColor="#f4f4f4";
// }