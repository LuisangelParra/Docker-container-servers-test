document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
});

document.getElementById('note-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const idEstudiante = document.getElementById('note-idEstudiante').value;
    const notaEstudiante = document.getElementById('note-notaEstudiante').value;

    const response = await fetch('/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idEstudiante, notaEstudiante })
    });
    const result = await response.json();
    document.getElementById('response').innerText = JSON.stringify(result, null, 2);
});
