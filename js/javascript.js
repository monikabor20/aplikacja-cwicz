document.getElementById('sekcjaNogi').addEventListener("click", function () {
    showList('myDropdownOne');
});

document.getElementById('sekcjaRece').addEventListener("click", function () {
    showList('myDropdownTwo');
});

document.getElementById('sekcjaKregoslup').addEventListener("click", function () {
    showList('myDropdownThree');
});

document.getElementById('sekcjaRozciaganie').addEventListener("click", function () {
    showList('myDropdownFour');
});

function showList(id) {
     const sekcja = document.getElementById(id);
    if (sekcja.style.display === "none") {
        sekcja.style.display = "block";
    } else {
        sekcja.style.display = "none";
    } 
}

function showExercise(target) {
    var lista = document.createElement("li");
    var t = document.createTextNode(target.innerHTML);
    lista.appendChild(t);
    document.getElementById("place").appendChild(lista);
}


document.addEventListener('click', function (event) {
    if ( event.target.classList.contains('btn')) {
        showExercise(event.target)
    }
}, false);














