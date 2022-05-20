var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slide[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // 1000 é igual a 1 segundo no slide

    //showslide e o nome da funçao
}