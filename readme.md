







1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: 
getElementById:It is a built-in function that finds and return the html element that matches the id name.If there is no such id then return null.

getElementsByClassName: A built-in function that finds html elements match the class name and return a collection of html element.If there is no match then return blank collection.

querySelector:It finds the first element in the document that match the id name.If does not match then return null.

querySelectorAll: Finds all the elements  match the class name and return nodelist. If finds nothing then return blank nodelist.

2. How do you **create and insert a new element into the DOM**?
Answer:
Create new element in javascript:
const newElement = document.createElement('div');

Find a parent to attach the new element:
const parentElement = document.getElementById("parentElement");

Insert into the DOM:
parentElement.appendChild(newElement);
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

