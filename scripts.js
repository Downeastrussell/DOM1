var headingElement = document.querySelector("#main-heading");

headingElement.innerHTML = "Hey Buddy!";


//the contents will change depending on the special that day
var currentSpecial = {
    name: "Fried GreenTomato BLT",
    description: "So good youl'll cry",
    price: 9.99
}
//using object to build html string
var htmlString = `
    <h3 class="dish-name">${currentSpecial.name}</h3>
    <p class="dish-description">
    ${currentSpecial.description}</p>
    <h5 class="dish-price">${currentSpecial.price}</h5>

`
//use html string in #daily-special <div>
document.querySelector("#daily-special").innerHTML = htmlString;

