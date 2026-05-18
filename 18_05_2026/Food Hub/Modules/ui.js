import { updatefood, deletefood } from "./api.js";
import { addtocart } from "./cart.js";

export function displayfoods(food) {

    let container = document.getElementById("foodcontainer");

    container.innerHTML = "";

    food.forEach((food) => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

        <h3>${food.name}</h3>

        <p>price : ${food.id * 100}</p>

        <button class="updatebtn">Update</button>

        <button class="deletebtn">Delete</button>

        <button class="cartbtn">Add to cart</button>
        `;


        // update

        card.querySelector(".updatebtn").addEventListener("click", async () => {

            await updatefood(food.id);

            alert("food updated");
        });
 

        // delete

        card.querySelector(".deletebtn").addEventListener("click", async () => {

            await deletefood(food.id);

            card.remove();

            alert("food deleted");
        });


        // cart

        card.querySelector(".cartbtn").addEventListener("click", () => {

            addtocart(food.name);
        });

        container.append(card);
    });
}