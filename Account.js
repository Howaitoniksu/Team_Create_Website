async function AccountData() {
    const response = await fetch('http://localhost:8000/api/user/getUserByToken', {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: localStorage.getItem('token'),
        })
    })
    const data = await response.json()
    document.getElementById('name') = data.name 
    if(!data.success) {
        return;
    }else {
        window.location.href = 'index.html'
}
localStorage.setItem('token', data.token)
}