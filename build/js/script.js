const btnMobile=document.querySelector("#btn-mobile");function toggleMenu(event){"touchstart"===event.type&&event.preventDefault();var nav=document.querySelector(".nav"),nav=(nav.classList.toggle("active"),nav.classList.contains("active"));event.currentTarget.setAttribute("aria-expanded",nav),nav?event.currentTarget.setAttribute("aria-label","Close Menu"):event.currentTarget.setAttribute("aria-label","Open Menu")}btnMobile.addEventListener("click",toggleMenu),btnMobile.addEventListener("touchstart",toggleMenu);