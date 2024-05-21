function launchFireworks() {
    const container = document.getElementById('firework-container');
    container.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        createFirework(container);
    }
}

function createFirework(container) {
    const firework = document.createElement('div');
    firework.className = 'firework';

    const colors = ['#ff0044', '#ff9900', '#ffdd00', '#00cc00', '#0066ff', '#6600cc'];
    const size = Math.random() * 20 + 10;

    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.left = `${Math.random() * 100}%`;

    container.appendChild(firework);

    setTimeout(() => {
        container.removeChild(firework);
    }, 1000);
}

function foldCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('fold');
}
