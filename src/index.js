import homePage from './modules/home.js'
import navigation from './modules/nav.js'
import menu from './modules/menu.js'

navigation();
homePage();

let item1 = document.getElementById("home");
item1.addEventListener("click", homePage);

let item2 = document.getElementById("menu");
item2.addEventListener("click", menu);