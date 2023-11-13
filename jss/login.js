"use strict"

let login = prompt("Введите логин");

if (login == "Не помню") {
    let password = prompt("Введите пароль");
    if (password == "Тем более не помню") {
        alert("Всё ты помнишь!");
    } else if (password === null) {
        alert("Не хочешь - как хочешь...");
    } else {
        alert("Вспоминай!");
    }
} else if (login === null) {
    alert("Не хочешь - как хочешь...");
} else {
    alert("Ты кто вообще?!");
}
