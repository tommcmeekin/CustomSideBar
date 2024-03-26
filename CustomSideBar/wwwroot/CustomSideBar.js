function toggleSidebar() {
    const sidebar = document.querySelector('.sidemenu');
    sidebar.classList.toggle('show');
    if (sidebar.classList.contains('show')) {
        document.querySelector('.toggle-btn').innerHTML = '✕';
    } else {
        document.querySelector('.toggle-btn').innerHTML = '☰';
    }
}