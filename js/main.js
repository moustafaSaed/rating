const rates = document.querySelectorAll(".rate-nmbrs a");
const sbmt = document.querySelector(".sbmt");
const rateValue = window.localStorage.getItem("rate");

function deleteActiveClass(arr) {
    arr.forEach(el => {
        el.classList.remove("active")
    })
}

if(rateValue) {
    // console.log(rateValue);
    deleteActiveClass(rates);
    rates.forEach(rate => {
        if(rate.getAttribute("data-ratee") == rateValue) {
            console.log(rate)
            rate.classList.add("active");
        }
    })
} else {
    console.log("not local  ...  ");
}

var dataRateValue = "";
rates.forEach(rate => {
    rate.addEventListener("click", (e)=>{
        e.preventDefault();
        dataRateValue = rate.getAttribute("data-ratee");
        deleteActiveClass(rates);
        e.target.classList.add("active");
        // console.log(dataRateValue);
        window.localStorage.setItem("rate",dataRateValue);
    })
});


sbmt.addEventListener("click", ()=>{
    window.location.href ='result.html?rate=' + dataRateValue;
})


