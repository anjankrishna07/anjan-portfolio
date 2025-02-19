function loadPage(page) {
    fetch(`/portfolio/pages/${page}.html`) // Update the path
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content-container').innerHTML = '<p>Page not found.</p>';
        });
}
