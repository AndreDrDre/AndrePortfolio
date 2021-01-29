let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'light.css'
    }

    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'Dark.css'
    }

    if (mode == 'funky') {
        document.getElementById('theme-style').href = 'funky.css'
    }

    localStorage.setItem('theme', mode)
}