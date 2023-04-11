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

// var titles = document.querySelectorAll('title');

// console.log(titles);
  
// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
// }



//Traversing the DOM


//ParentNode
// var itemList =  document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='skyblue';

//LastElementChild

// var itemList =  document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='skyblue';

// //Children
// var itemList =  document.querySelector('#items');
// console.log(itemList.children);
// itemList.children.style.backgroundColor='skyblue';

// //FirstChild
// var itemList =  document.querySelector('#items');
// console.log(itemList.firstChild);
// //First ElementChild
// console.log(itemList.firstElementChild);

//LastChild

// var itemList =  document.querySelector('#items');

// console.log(itemList.lastChild);

// // lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';


//nextSibling

// var itemList =  document.querySelector('#items');

// console.log(itemList.nextSibling);

// console.log(itemList.nextElementSibling);

// itemList.nextElementSibling.textContent='Level Up';

//previousSibling
var itemList =  document.querySelector('#items');

// console.log(itemList.previousSibling);

// console.log(itemList.previousElementSibling);

//previousElementSibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='Green';

//Create Element

//Create a div

var newDiv = document.createElement('div');

// Add class
newDiv.className='hello';

//Add Id
newDiv.id = 'hello1';

// Add Attr

newDiv.setAttribute('title','Hello Div');

//Create text node

var newDivText  = document.createTextNode('Hello World');

//Add text to div

newDiv.appendChild(newDivText);

var containerBelow = document.querySelector('header .container');

var h1=document.querySelector('header h1');

console.log(newDiv);

containerBelow.insertBefore(newDiv,h1);

//Add Node before Item 1

var newDiv1 = document.createElement('div');

// Add class
newDiv1.className='hello1';

//Add Id
newDiv1.id = 'hello12';

// Add Attr

newDiv1.setAttribute('title','Hello Div');

//Create text node

var newDivText1  = document.createTextNode('HEllo word');

var belowItems= document.querySelector('.list-group');

var AboveItem1=document.querySelector('.list-group-item');

belowItems.insertBefore(newDivText1,AboveItem1);

