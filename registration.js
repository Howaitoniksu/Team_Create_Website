async function register() {
    const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            phone_number: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    })

    const data = await response.json()

    if (!data.success) {
        return;
    }

    localStorage.setItem('token', data.token)

    window.location.href = 'main.html'
}
