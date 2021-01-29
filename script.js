console.log('Its working')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

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
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'Dark.css'
    }

    if (mode == 'funky') {
        document.getElementById('theme-style').href = 'funky.css'
    }

    localStorage.setItem('theme', mode)
}

/*Section 3 Spinning carsoul*/

var modals = document.getElementsByClassName("modal");

for(let i = 0; i < modals.length; i++) {
    let modal = modals[i];
    
    let refa = document.getElementsByClassName("content-carousel")[0].getElementsByTagName("a")[i];
    let description = document.getElementsByClassName("content-carousel")[0].getElementsByTagName("p")[i];
    let img = document.getElementsByClassName("content-carousel")[0].getElementsByTagName("img")[i];
    let modalImg = document.getElementById("img" + i);
    let captionText = document.getElementsByClassName("caption")[i];

    
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;

    }
    
    let span = document.getElementsByClassName("close")[i];
    
    span.onclick = function () {
        modal.style.display = "none";
    }
}

function LocationChange() {
   
    
    var delayInMilliseconds = 15000; //10 second
    
    setTimeout(function() {
        window.location.href = 'thankyou.html';
    }, delayInMilliseconds);   

  
}

