document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('header nav');
    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            navContainer.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
});