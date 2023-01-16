const changeBtn = document.querySelector(".choose-btn");
const yearly = document.querySelectorAll(".yearly");
const monthly = document.querySelectorAll(".monthly");

changeBtn.addEventListener("click", () => {
    changeBtn.classList.toggle("after:-translate-x-7");
    yearly.forEach(x => x.classList.toggle("hidden"));
    monthly.forEach(y => y.classList.toggle("hidden"));
    
})