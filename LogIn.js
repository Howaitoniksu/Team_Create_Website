async function LogIn() {
    const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })

    })
    const data = await response.json()

    if (!data.success) {
        return;
    }
    localStorage.setItem('token', data.token)

    window.location.href = 'mainPage.html'
}