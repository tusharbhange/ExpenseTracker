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


// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1]);
// items[1].textContent="Hello 2";
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='green';

// items.style.backgroundColor='#f4f4f4';

// for(var i=0; i<items.length;i++)
// {
//     items[i].style.backgroundColor="#f4f4f4";
// }


// Get Elements by Tag name

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Hello 2";
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='#f6f4f4';
// }

//QuerySelector

// var header = document.querySelector('#main-header');

// header.style.borderBottom = 'solid 5px #ccc';

// var input = document.querySelector('input');

// input.value='Hello World!'

// var submit = document.querySelector('input[type="submit"]');

// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2');
// secondItem.style.color='green';

// Querry Selector All

var titles = document.querySelectorAll('title');

console.log(titles);
  
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}