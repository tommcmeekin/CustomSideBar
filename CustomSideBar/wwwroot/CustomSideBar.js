function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
    if (sidebar.classList.contains('show')) {
        document.querySelector('.toggle-btn').innerHTML = '✕';
    } else {
        document.querySelector('.toggle-btn').innerHTML = '☰';
    }
}