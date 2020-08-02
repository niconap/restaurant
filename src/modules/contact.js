const contact = () => {
    let container = document.getElementById("content");
    container.innerHTML = "";
    let title = document.createElement("h1");
    title.innerHTML = "Contact Us";
    container.appendChild(title);
    let table = document.createElement("table");
    table.setAttribute("id", "contact");
    container.appendChild(table);
    let row1 = table.insertRow();
    let row2 = table.insertRow();
    let row3 = table.insertRow();
    let cell1 = row1.insertCell();
    let cell2 = row1.insertCell();
    let cell3 = row2.insertCell();
    let cell4 = row3.insertCell();
    cell4.setAttribute("id", "buttoncell");
    cell4.setAttribute("colspan", "2");
    cell3.setAttribute("colspan", "2");
    let name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("id", "textinput");
    name.setAttribute("placeholder", "Your Name");
    cell1.appendChild(name);
    let email = document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("placeholder", "Your E-Mail");
    email.setAttribute("id", "textinput");
    cell2.appendChild(email);
    let question = document.createElement("textarea");
    question.setAttribute("id", "textarea");
    question.setAttribute("placeholder", "Your Question");
    cell3.appendChild(question);
    let button = document.createElement("button");
    button.innerHTML = "Submit";
    button.setAttribute("id", "submit");
    cell4.appendChild(button);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "You can also call us at: 06 12345678";
    container.appendChild(paragraph);
}

export default contact