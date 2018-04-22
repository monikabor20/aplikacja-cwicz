var kliknietoWSekcje;
document.getElementById('sekcjaNogi').addEventListener("click", function () {
    kliknietoWSekcje = "Nogi";
    showList('myDropdownOne');
});

document.getElementById('sekcjaRece').addEventListener("click", function () {
    kliknietoWSekcje = "Ręce";
    showList('myDropdownTwo');
});

document.getElementById('sekcjaKregoslup').addEventListener("click", function () {
    kliknietoWSekcje = "Kręgosłup";
    showList('myDropdownThree');
});

document.getElementById('sekcjaRozciaganie').addEventListener("click", function () {
    kliknietoWSekcje = "Rozciąganie";
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
    var exercise = document.createTextNode(`${kliknietoWSekcje} - ${target.innerHTML}`);
    lista.appendChild(exercise);
    document.getElementById("place").appendChild(lista);

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete fas fa-check";
    deleteButton.addEventListener('click', function() {
        document.getElementById("place").removeChild(lista);
    })
    lista.appendChild(deleteButton);
        return lista;
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn')) {
        showExercise(event.target)
    }
}, false);
