const rates = document.querySelectorAll(".rate-nmbrs a");
const sbmt = document.querySelector(".sbmt");

var dataRateValue = "";
rates.forEach(rate => {
    rate.addEventListener("click", (e)=>{
        e.preventDefault();
        dataRateValue = rate.getAttribute("data-ratee");
        console.log(dataRateValue);
        window.localStorage.setItem("rate",dataRateValue);
    })
});



sbmt.addEventListener("click", ()=>{
    window.location.href ='result.html?rate=' + dataRateValue;
})


