"use static"

const button = document.querySelector(".button"),
    result = document.querySelector(".result");


function question() {
    const question = confirm("Tojta nevaresni yoki bolesni kimligini kormoqchi misiz", "");

    if (question == true) {
        function appear() {
            button.style.display = "none";
            result.style.display = "flex";
        }
        appear();
    } else {
        alert("mayli o'ziz bilasiz");
    }
}