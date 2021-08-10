function changeColor() {
    if (document.querySelector("input[value='red']").checked) {
        document.getElementById("text").style.color = "red";
    } else if (document.querySelector("input[value='blue']").checked) {
        document.getElementById("text").style.color = "blue";
    } else if (document.querySelector("input[value='green']").checked) {
        document.getElementById("text").style.color = "green";
    }
}

function changeBg() {
    var ddl = document.getElementById("colorsel");
    var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "red") {
        document.getElementById("td_text").style.backgroundColor = "red";
    } else if (selectedValue == "blue") {
        document.getElementById("td_text").style.backgroundColor = "blue";
    } else if (selectedValue == "green") {
        document.getElementById("td_text").style.backgroundColor = "green";
    } else {
        document.getElementById("td_text").style.backgroundColor = "white";
    }
}