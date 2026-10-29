let heading  = document.getElementById("heading");
console.log(heading);

// display selected ele content

console.log(heading.textContent);

// 2. Select an element using querySelector()
const firstParagraph = document.querySelector(".description");

console.log(firstParagraph);
console.log(firstParagraph.textContent);


// 3. Select multiple elements using querySelectorAll()
const paragraphs = document.querySelectorAll(".description");

console.log(paragraphs);

// Display all paragraph contents
paragraphs.forEach((paragraph) => {
    console.log(paragraph.textContent);
});


// 4. Change the text of a selected element
heading.textContent = "Welcome to DOM Manipulation";


// 5. Select elements using class names
const subheading = document.querySelector(".subheading");

console.log(subheading.textContent);


// 6. Select elements using tag names
const allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);

for (let i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs[i].textContent);
}


// 7. Select elements using getElementsByClassName()
const descriptions = document.getElementsByClassName("description");

console.log(descriptions);


// 8. Change paragraph text
descriptions[0].textContent = "First paragraph updated successfully.";

