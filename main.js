const cartDOM = document.querySelector(".cart__items");
const addToCartBtn = document.querySelectorAll(".btn__add__to__cart");
const cartCounter = document.querySelector(".cart__counter");
const totalCost = document.querySelector(".total__cost");
const totalCount = document.querySelector("#total__counter");
const checkOutBtn = document.querySelector(".check_out_btn");


let cartItems = (JSON.parse(localStorage.getItem("cart_items")) || []);


document.addEventListener("DOMContentLoaded", loadData);


checkOutBtn.addEventListener("click", () =>  {
    alert("Your Order Sent Succesfully");
    clearCartItems();
})

cartCounter.addEventListener("click", () => {
    cartDOM.classList.toggle("active");
})



