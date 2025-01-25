document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('click', function() {
        const description = this.getAttribute('data-description');
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal').style.display = 'block';
    });
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}