/*In the repository, there is an index.html starting file which has the skeleton of an online menu. 
Style the menu by following the instructions below.

Rules:

All changes to the menu should be done in JavaScript! No CSS!!
The page should be responsive.
Instructions:

Change the font of the body element.
Center the text of h1 on the page.
The menu headings have a class named category. Select the elements by class name.
Then, change the color and font-style of each element.
Create a function named "colorGenerator" that returns a different color.
The returned random color should also include set transparency. 
Select the unordered lists with the class of food-category.
Give each list a different background color using the function that you created.
Align the food-category lists in a row on desktop. 
Make sure that the page is responsive and also works on mobile.
Select the warning at the end of the page by its id warning.
Select the id without using a querySelector. Change the size and font of the warning.
Select all even allergy-info items. Give the even items a different background color.
Make the allergy-warning appear as a column in the center of the page.
The descriptions in the footer should also be styled, e.g. a rounded border with a background color.
They should appear in a column for mobile and in a row for desktop.*/



//change font of body
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//styling of title and section
const title = document.querySelector(".title");
title.style.textAlign = "center";

const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around"

//change styling of h2 elements
const menuCategories = document.querySelectorAll(".category");
for (let i = 0; i < menuCategories.length; i++) {
    category = menuCategories[i].style;
    category.fontStyle = "italic"
    category.fontSize = "2rem";
    category.borderBottom = "1px solid black";
}
console.log(menuCategories);

//change font size of warning at bottom of page
let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.marginBottom = "0";
warning.style.marginLeft = "1.5rem";

//color generator
function colorGenerator() {
    let letters = '0123456789ABCDEF';
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    randomColor += "50";
    return randomColor;
}

//assigning a random color to each list item
const foodCategories = document.querySelectorAll(".food-category");
for (let i = 0; i < foodCategories.length; i++) {
    let categories = foodCategories[i].style;
    categories.backgroundColor = colorGenerator();
    categories.width = "20rem";
    categories.height = "10rem";
    categories.margin = "1rem";
}

const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach(item => {
    item.style.marginTop = "1rem";
})

// allergies section - add styling
const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

const allergyList = document.querySelector(".allergies");
allergyList.style.width = "20rem";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";

const allergyItems = document.querySelectorAll(".allergy-info:nth-child(2n)");
allergyItems.forEach(item => {
    item.style.backgroundColor = "skyblue";
})

//footer descriptions
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const description = document.querySelectorAll(".food-desc");
description.forEach(footerDesc => {
    let desc = footerDesc.style;
    desc.border = "5px solid orange";
    desc.borderRadius = "100%";
    desc.height = "7rem";
    desc.width = "7rem";
    desc.display = "flex";
    desc.justifyContent = "center";
    desc.alignItems = "center";
    desc.margin = "1rem";
})


