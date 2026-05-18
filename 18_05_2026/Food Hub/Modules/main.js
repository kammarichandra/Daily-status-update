import { getfoods, addfood } from "./api.js";
import { displayfoods } from "./ui.js";


// load data

async function loadfoods() {

    let foods = await getfoods();

    displayfoods(foods.recipes);
}

loadfoods();


// add food

document.getElementById("addbtn").addEventListener("click", async () => {

    let name = document.getElementById("foodname").value;

    let price = document.getElementById("foodprice").value;

    let food = {

        title: name,
        body: price,
        userid: 1
    };

    await addfood(food);

    alert("food added");

    loadfoods();
});