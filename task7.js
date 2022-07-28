//parentElement
var itemList=document.querySelector("#items");
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#4287f5";

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="Hello";
itemList.firstElementChild.style.backgroundColor="red";

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Welcome";

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="yellow";

//createElement
//create a div
var newDiv=document.createElement('div');

//add a class
newDiv.className="hello";

//adding id
newDiv.id="hi";

//adding attribute
newDiv.setAttribute('title','Hello git hub');

//creating a text node
var newDivText=document.createTextNode("Hello world");

//adding text to div
newDiv.appendChild(newDivText);

//Now go head and add HEllo word before Item Lister
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize="30px";
container.insertBefore(newDiv,h1);


//Now go head and add HEllo word before Item 1
var newele=document.createElement('div');

//add a class
newele.className="hi";

//adding id
newele.id="hello";

//adding attribute
newele.setAttribute('title','Hello git hub');

//creating a text node
var neweleText=document.createTextNode("Hello world");

//adding text to div
newele.appendChild(neweleText)
var div=document.querySelector('div .list-group')
var li=document.querySelector('div itemList.firstElementChild');
console.log(newele);
newele.style.fontSize="20px";
div.insertBefore(newele,itemList.firstElementChild);


