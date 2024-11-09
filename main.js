let click = document.getElementById('click')

click.addEventListener('click', () => {
    document.body.classList.toggle('dark-color')
})

let bar = document.querySelectorAll('#bar')
let navBar = document.querySelector('ul')

for (i = 0; i <= bar.length; i++){

    bar[i].addEventListener('click', () => {
        navBar.classList.toggle('show')
    })
}