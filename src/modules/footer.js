const footer = () => {
    let container = document.getElementById("footer");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Made by: ";
    container.appendChild(paragraph);
    let link = document.createElement("a");
    link.setAttribute("href", "https://www.github.com/niconap/restaurant/");
    link.innerHTML = "Nico";
    link.setAttribute("target", "_blank");
    container.appendChild(link);
}

export default footer