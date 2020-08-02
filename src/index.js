import homePage from './modules/home.js'
import navigation from './modules/nav.js'
import menu from './modules/menu.js'
import contact from './modules/contact.js'
import footer from './modules/footer.js'

navigation();
homePage();
footer();

let item1 = document.getElementById("home");
item1.addEventListener("click", homePage);

let item2 = document.getElementById("menu");
item2.addEventListener("click", menu);

let item3 = document.getElementById("contact");
item3.addEventListener("click", contact);