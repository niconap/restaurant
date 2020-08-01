const menu = () => {
    let container = document.getElementById("content");
    container.innerHTML = "";
    let title = document.createElement("h1");
    title.innerHTML = "Menu";
    container.appendChild(title);
}

export default menu