// alert("Still in progress.")

{/* <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />

<a data-fancybox="gallery" href="img/ascend.pdf"><img src="img/ascend_1.png"></a>
<a data-fancybox="gallery" href="img/book.pdf"><img src="img/book.jpg" alt="book"></a>
<a data-fancybox="gallery" href="img/andagi.mp4"><img src="img/andagi.png" alt="andagi"></a>
<a data-fancybox="gallery" href="img/zoo.pdf"><img src="img/zoo.png"alt="zoo"></a>
<a data-fancybox="gallery" href="img/Moma_cover.jpg"><img src="moma"alt="moma"></a>
<a data-fancybox="gallery" href="img/olympics.png"><img src="olympics"alt="olympics"></a> */}


document.addEventListener('DOMContentLoaded', function() {

    var myMenuButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('.site-header .site-navigation');
    // console.log(myMenuButton);
    myMenuButton.addEventListener('click', function() {
        // console.log("why am I broken?")
        myMainMenu.classList.toggle('expanded');
    });
});

// _________________________________________________________
  