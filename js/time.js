function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('tokyo').textContent = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Tokyo' }).format(now);
    document.getElementById('paris').textContent = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Paris' }).format(now);
    document.getElementById('bogota').textContent = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Bogota' }).format(now);
}

setInterval(updateTime, 1000);
updateTime();
