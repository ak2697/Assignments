function displayUserInfo() {
    const output = document.getElementById('output');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    output.innerHTML = users.map(user => `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>City:</strong> ${user.city}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `).join('');
}

function addUserInfo() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push({ name, age, city, email });

    localStorage.setItem('users', JSON.stringify(users));

    displayUserInfo();

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('city').value = '';
    document.getElementById('email').value = '';
}

window.onload = displayUserInfo;
