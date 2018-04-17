document.getElementById('sekcjaNogi').addEventListener("click", function () {
    showButton('myDropdownOne');
});

document.getElementById('sekcjaRece').addEventListener("click", function () {
    showButton('myDropdownTwo');
});

document.getElementById('sekcjaKregoslup').addEventListener("click", function () {
    showButton('myDropdownThree');
});

document.getElementById('sekcjaRozciaganie').addEventListener("click", function () {
    showButton('myDropdownFour');
});

function showButton(id) {
     var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

