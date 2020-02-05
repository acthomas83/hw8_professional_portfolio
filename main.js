function randombg(){
    var random= Math.floor(Math.random() * 2) + 0;
    var newImage = [
                   "url('./images/Web-Dev-BG-5.png')",
                   "url('./images/Web-Dev-BG-4.jpg')",
                   ];
    document.getElementById("background-animation").style.backgroundImage=newImage[random];
  }