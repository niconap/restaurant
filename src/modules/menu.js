const menu = () => {
    let container = document.getElementById("content");
    container.innerHTML = "";
    let title = document.createElement("h1");
    title.innerHTML = "Menu";
    container.appendChild(title);
    let table = document.createElement("table");
    table.setAttribute("id", "menu");
    container.appendChild(table);
    let row1 = table.insertRow();
    let cell1 = row1.insertCell();
    cell1.innerHTML = "Item";
    cell1.setAttribute("style", "font-weight: 600;")
    let cell2 = row1.insertCell();
    cell2.innerHTML = "Price";
    cell2.setAttribute("style", "font-weight: 600;")
    let row2 = table.insertRow();
    let cell3 = row2.insertCell();
    cell3.innerHTML = "Traditional Hutspot";
    let cell4 = row2.insertCell();
    cell4.innerHTML = "€5,50";
    let row3 = table.insertRow();
    let cell5 = row3.insertCell();
    cell5.innerHTML = "Splitpea Soup";
    let cell6 = row3.insertCell();
    cell6.innerHTML = "€3,30";
    let row4 = table.insertRow();
    let cell7 = row4.insertCell();
    cell7.innerHTML = "Kibbeling with Fries";
    let cell8 = row4.insertCell();
    cell8.innerHTML = "€6,50";
    let row5 = table.insertRow();
    let cell9 = row5.insertCell();
    cell9.innerHTML = "Deserts";
    cell9.setAttribute("style", "font-weight: 600;");
    let row6 = table.insertRow();
    let cell10 = row6.insertCell();
    cell10.innerHTML = "Dutch Pancakes";
    let cell11 = row6.insertCell();
    cell11.innerHTML = "€4,00";
    let row7 = table.insertRow();
    let cell12 = row7.insertCell();
    cell12.innerHTML = "Stroopwafels with Icecream";
    let cell13 = row7.insertCell();
    cell13.innerHTML = "€5,00";
}

export default menu