async function CallbackInput() {
    const response = await fetch('http://localhost:8000/api/callback/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phone_number: document.getElementById('phone').value,
        })
    })
    const data = await response.json
    ()
    if (!data.success) {
        return;
    }
    window.location.href = 'mainPage.html'
}