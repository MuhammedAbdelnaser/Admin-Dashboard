const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelectorAll(".theme-toggler span");
const root = document.querySelector(":root")


menuBtn.addEventListener("click", () => {
    // sideMenu.style.display = 'block'
    sideMenu.style.marginLeft = "0rem"
})

closeBtn.addEventListener("click", () => {
    // sideMenu.style.display = "none"
    sideMenu.style.marginLeft = "-16rem"
})

// Dark Theme
themeToggler[1].addEventListener("click", () => {
    document.body.classList.add("dark-theme-variables");
    themeToggler.forEach((el) => {
        el.classList.remove("active")
    })
    themeToggler[1].classList.add("active")
})

// Light Theme

themeToggler[0].addEventListener("click", () => {
    document.body.classList.remove("dark-theme-variables");
    themeToggler.forEach((el) => {
        el.classList.remove("active")
    })
    themeToggler[0].classList.add("active")
});

orders.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === "Declined" ? "elrawy" : order.shipping === 'pending' ? 'elrawy' : "primary"}">${order.shipping}</td>
                        <td class="primary" style="cursor: pointer">Details</td>
    `
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr)
})