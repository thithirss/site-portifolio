function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}