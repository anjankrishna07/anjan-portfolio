// Function to load pages dynamically
function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            document.getElementById('content-container').innerHTML = '<p>Page not found.</p>';
        });
}

// Load the default page (About) on initial load
window.onload = () => loadPage('about');