const navigation = () => {
    let container = document.getElementById("nav");
    let list = document.createElement("ul");
    container.appendChild(list);
    let item1 = document.createElement("li");
    item1.innerHTML = "Home";
    item1.setAttribute("id", "home");
    list.appendChild(item1);
    let item2 = document.createElement("li");
    item2.innerHTML = "Menu";
    item2.setAttribute("id", "menu");
    list.appendChild(item2);
    let item3 = document.createElement("li");
    item3.innerHTML = "Contact";
    item3.setAttribute("id", "contact");
    list.appendChild(item3);
}

export default navigation