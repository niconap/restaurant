const homePage = () => {
    let container = document.getElementById("content");
    container.innerHTML = "";
    let title = document.createElement("h1");
    title.innerHTML = "Restaurant La Vie";
    container.appendChild(title);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome to our website! Our restaurant serves the best traditional food! <br> We are located in the heart of Amsterdam. Please come visit us!";
    container.appendChild(paragraph);
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