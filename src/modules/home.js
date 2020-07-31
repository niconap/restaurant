const homePage = () => {
    let container = document.getElementById("content");
    let banner = document.createElement("img");
    banner.setAttribute("src", "./restaurant_4.jpg");
    container.appendChild(banner);
    let title = document.createElement("h1");
    title.innerHTML = "Restaurant La Vie";
    container.appendChild(title);
    let address = document.createElement("table");
    address.setAttribute("id", "address");
    container.appendChild(address);
    let table = document.getElementById("address");
    let row1 = address.insertRow();
    let cell1 = row1.insertCell();
    cell1.innerHTML = "Location:";
    let cell2 = row1.insertCell();
    let row2 = address.insertRow();
    let cell3 = row2.insertCell();
    cell3.innerHTML = "Amsterdam, Netherlands"
    let cell4 = row2.insertCell();
    cell4.innerHTML = "1011 TT, Rapenburg"
}

export default homePage