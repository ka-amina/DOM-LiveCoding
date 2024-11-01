//// to get elements bt id

// const item= document.getElementById("page-title");
// console.log(item.innerHTML);
// const item= document.getElementById("page-title");
// item.innerHTML="hello";

// //get elements by tagName

// const item= document.getElementsByTagName("h1");
// console.log(item)

// //get elements by className

// const item= document.getElementsByClassName("program");
// console.log(item)

// //using querySelector

// const js = document.querySelector('.selector-examples li:nth-child(2)');
// console.log(js.textContent);

//// get the third child of list items

// const item =document.querySelector('ul li:nth-child(3)')
// console.log(item.textContent)

//// get the content of item

// const items = document.querySelectorAll(".selector-examples li");
// items.forEach((item) => {
//   if (item.textContent.toLowerCase() === "javascript") console.log(item);
// });

////add an item Nb: you should insert the element on the input and click on the add button

// function addItem() {
//     var ul = document.getElementById("dynamic-list");
//     var lang = document.getElementById("lang");
//     var li = document.createElement("li");
//     if (lang.value === "") {
//       alert("Please enter a language name.");
//       return;
//     }
//     li.textContent = lang.value;
//   //   li.setAttribute("id", lang.value);
//   li.id = lang.value;
//   ul.appendChild(li);
//     lang.value = "";
//   }

////Remove an item Nb: you should insert the element on the input and click on the remove button button
//   function removeItem() {
//     var ul = document.getElementById("dynamic-list");
//     var lang = document.getElementById("lang");
//     var item = document.getElementById(lang.value);
//     ul.removeChild(item);
//   }

////another methode

// let ul = document.querySelector("#dynamic-list");
// let inputValue = document.getElementById("lang");
// function addItem() {
//   const li = document.createElement("li");
//   console.log(inputValue.value);
//   if (inputValue.value.trim() === "") {
//     alert("Please enter a language name.");
//     return;
//   }
//   li.textContent = inputValue.value;
//   li.id = inputValue.value;
//   ul.appendChild(li);
//   inputValue.value = "";
// }
// function removeItem() {
//   var item = document.getElementById(inputValue.value);
//   ul.removeChild(item);
// }

//// here is an example to add a div on the html

//   function addDiv() {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = "Hello, DOM!";
//     newDiv.style.color = "white";
//     const container = document.querySelector(".add-div-container");
//     container.appendChild(newDiv);
//   }


////RemoveAttribute

//   const element= document.querySelector('.remove-btn');
//   element.removeAttribute('class')

////setAtribute

// const element= document.querySelector('.remove-btn');
// element.setAttribute('style', 'padding:2rem; color:green');


// use toggle methode

// const title = document.getElementById("page-title");
// function toggleTitle() {
//     title.classList.toggle("highlight");
//   }




//////// Hide and show elements using CSS properties (display, visibility)
//// display 


// function toggleDisplay() {
//     const element = document.querySelector('.visivility');
//     if (element.style.display === 'none') {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   }

////visibility Nb:you should go to the style.css file and remove the ''display: none;'' style on .visivility class and add visibility: hidden;

// function toggleDisplay() {
//     const element = document.querySelector('.visivility');
//     if (element.style.visibility === 'hidden') {
//       element.style.visibility = 'visible';
//     } else {
//       element.style.visibility = 'hidden';
//     }
//   }
