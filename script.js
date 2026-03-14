var isHeaderWhite = false;
var originalBgColor = '#fff0f5';
var images = [
    'img/image 1.jpg',
    'img/image 2.jpg',
    'img/image 3.jpg'
];
var currentSlideIndex = 0;
var slideInterval;

function init() {
    var da = new Date();
    var month = new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
    var d = da.getDate() + " " + month[da.getMonth()] + " " + da.getFullYear();
    document.getElementById("currentDate").innerHTML = "Сегодня: " + d;
}

function toggleHeaderColor() {
    var el = document.getElementById('headerTitle');
    isHeaderWhite = !isHeaderWhite;
    
    if(isHeaderWhite) {
        el.style.color = 'white';
        el.style.textShadow = '0 0 8px rgba(0,0,0,0.6)';
        document.body.style.backgroundColor = '#ff1493';
    } else {
        el.style.color = '#ff1493';
        el.style.textShadow = 'none';
        document.body.style.backgroundColor = originalBgColor;
    }
}

function changeFlowerColor() {
    var el = document.getElementById('flowerHead');
    var colors = ['#ff69b4','#dda0dd','#ff1493','#ff00ff','#00ffff','#ff4500','#ffd700'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.backgroundColor = randomColor;
}

function showGreeting(event) {
    if(event) event.preventDefault();
    
    var form = document.greetingForm;
    var name = form.userName.value.trim();
    var errorMsg = "";

    if(name === "") {
        errorMsg = "Пожалуйста, введите имя!";
    }

    if(errorMsg !== "") {
        alert(errorMsg);
        return false;
    }

    var resultCard = document.getElementById('resultCard');
    var greetingText = document.getElementById('greetingText');
    var slideImg = document.getElementById('slideImage');
    
    greetingText.innerHTML = "Дорогая, " + name + "!";
    
    currentSlideIndex = 0;
    slideImg.src = images[currentSlideIndex];
    
    resultCard.classList.remove('hidden');
    
    if(slideInterval) clearInterval(slideInterval);
    
    slideInterval = setInterval(function() {
        currentSlideIndex++;
        if (currentSlideIndex >= images.length) {
            currentSlideIndex = 0;
        }
        slideImg.src = images[currentSlideIndex];
    }, 2000);
    
    document.body.style.backgroundColor = '#ffe4e1';
    
    var header = document.getElementById('headerTitle');
    if(header.style.color === 'white') {
        header.style.color = '#ff1493';
        header.style.textShadow = 'none';
        isHeaderWhite = false;
    }
    
    setTimeout(function() {
        document.body.style.backgroundColor = originalBgColor;
    }, 3000);
    
    form.reset();
    return false;
}

function closeGreeting() {
    if(slideInterval) clearInterval(slideInterval);
    document.getElementById('resultCard').classList.add('hidden');
}

init();