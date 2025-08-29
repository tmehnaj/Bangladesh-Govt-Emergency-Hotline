







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
Answer:
If there is card as a parent element, then inside a card there is a div element and inside the div there is a button  element. We set same click event to the card,div and also the button.
so if we click the button 3 events are called the button event,for div event and for the parent event.
Now there is question which event happen first. In the given situation button event happen first,then the div (button immidiate parent),then the card (div parent). So event happen in the path of children towards its' parent then another parent. 
So things path like the bubble little to bigger ,from least child to the far parent.
this situation ,this path is called Event Bubbling.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
Just like the word 'delegate' in this situated we delegate the event responsibility to the parent element.And through the parent element we can add each children same or different element.we can choose like...

document.getElementById('parentElement').addEventListener('click',function(event){
    if(event.target.matches('childElement')){
        console.log('event delegation has been happened');
    }
})
Thus only just hold parent element we can add event for every children or even specific event to specific child only.This saves time and space complexity.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
 When event happen sometimes some default thing also happens.To prevent this default behavior sometimes we use preventDefault() in the event function.Like:

when we submit a form page automatically reload.Sometimes a form inside a webpage does not want reload while submitting a form for other functionalities in the same webpage.So then we use preventDefault().

On the other hand, propagation is the way of happening the event . Two propagation flow 
.Default bubbling (Event happen from child to parent)
.Capturing event( Event happen from parent to child)
If we want to stop happening event into somewhere of the flaw, then we use stopPropagation().
In this way we can stop the event flaw to go further.
