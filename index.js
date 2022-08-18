const ratestate = document.querySelector(".rating-state");
const thankyou = document.querySelector(".thankyou-state");
const sbtbtn = document.querySelector(".submit-btn");
const ratingbuttons = document.querySelectorAll(".ratingbutton");
const finalrating = document.querySelector("#ratingfinal")
sbtbtn.addEventListener("click", () => {
    if (finalrating.innerHTML != "") {
        ratestate.classList.add("hidden");
        thankyou.classList.remove("hidden");
    } else {
        alert("Please give a rating")
    }
    // ratestate.classList.add("hidden");
    // thankyou.classList.remove("hidden");

})
ratingbuttons.forEach(
    (rate) => {
        rate.addEventListener("click", () => {
            finalrating.innerHTML = rate.innerHTML;
            console.log(rate.innerHTML);
        })
    }
)


