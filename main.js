function randombg() {
  var random = Math.floor(Math.random() * 2) + 0;
  var newImage = [
    "url('./images/Web-Dev-BG-5.png')",
    "url('./images/Web-Dev-BG-4.jpg')"
  ];
  document.getElementById("background-animation").style.backgroundImage =
    newImage[random];
}

//   var stateKeys = {
//     Alabama: "AL",
//     Alaska: "AK",

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = $("#projectBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.click(function(e) {
    //create ref to the button we just clicked
    var thisButton = $(this);
    //get the name data attribute from the button we just clicked
    var projectName = thisButton.attr("data-name");
    //use it to loop through "projectz" and find a match based on projectz[i].name

    //once we get the object that matches the name of the button we clicked,
    //we can use jquery to replace certain elements in our modal with values from the object

    //then, display the modal
    modal.style.display = "block";
  });

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// const passwordGenerator = {
//   name: "Random Password Generator",
//   description: "This project was brought about because of the occasionally need to create secure passwords. Thinking of a random password on your own isn't always as easy as it seems. Thanks to this simple and easy to use web application, you will never have to again. This web application is a random password generator that allows a user to specify customized features of their password including the length of the password (8-128 characters), as well if the password should include upper-case, lower-case, numbers and/or special characters. Although this application appears simple from the GUI perspective, the nuts and bolts under the hood created a challenging experience that required some extensive thought and problem-solving to get it to work properly. I learned that it’s always a good idea to conduct due diligence by completing a thorough pseudocoding to map out the project beforehand.",
//   github: "https://github.com/acthomas83/hw3_PW_Algorithms.git",
//   site: "https://acthomas83.github.io/hw3_PW_Algorithms/",
//   image: "./images/pw_gen.png",

//   };


let projects = [
    {
        name: 'planIt',
        description: 'A workday schedule generator application',
        github: "https://github.com/acthomas83/hw5_Day_Planner",
        site: "https://acthomas83.github.io/hw5_Day_Planner/",
        image: "./images/pw_gen.png",
    },
    {
      name: "Scratch Game: Cat & Mouse",
      description: "This game was created as part of prework for the GA Tech Coding Bootcamp.",
      github: "https://github.com/acthomas83/hw3_PW_Algorithms.git",
      site: "https://acthomas83.github.io/hw3_PW_Algorithms/",
      image: "./images/catmouse-site.png",
    },
    {
      name: "Random Password Generator",
      description: "This project was brought about because of the occasionally need to create secure passwords. Thinking of a random password on your own isn't always as easy as it seems. Thanks to this simple and easy to use web application, you will never have to again. This web application is a random password generator that allows a user to specify customized features of their password including the length of the password (8-128 characters), as well if the password should include upper-case, lower-case, numbers and/or special characters. Although this application appears simple from the GUI perspective, the nuts and bolts under the hood created a challenging experience that required some extensive thought and problem-solving to get it to work properly. I learned that it’s always a good idea to conduct due diligence by completing a thorough pseudocoding to map out the project beforehand.",
      github: "https://github.com/acthomas83/hw3_PW_Algorithms.git",
      site: "https://acthomas83.github.io/hw3_PW_Algorithms/",
      image: "./images/pw_gen.png",
    },
    {
      name: "lessTraveled",
      description: "This project was brought about because of the occasionally need to create secure passwords. Thinking of a random password on your own isn't always as easy as it seems. Thanks to this simple and easy to use web application, you will never have to again. This web application is a random password generator that allows a user to specify customized features of their password including the length of the password (8-128 characters), as well if the password should include upper-case, lower-case, numbers and/or special characters. Although this application appears simple from the GUI perspective, the nuts and bolts under the hood created a challenging experience that required some extensive thought and problem-solving to get it to work properly. I learned that it’s always a good idea to conduct due diligence by completing a thorough pseudocoding to map out the project beforehand.",
      github: "https://github.com/acthomas83/hw3_PW_Algorithms.git",
      site: "https://acthomas83.github.io/hw3_PW_Algorithms/",
      image: "./images/pw_gen.png",
    },
    {
      name: "Weathered",
      description: "This project was brought about because of the occasionally need to create secure passwords. Thinking of a random password on your own isn't always as easy as it seems. Thanks to this simple and easy to use web application, you will never have to again. This web application is a random password generator that allows a user to specify customized features of their password including the length of the password (8-128 characters), as well if the password should include upper-case, lower-case, numbers and/or special characters. Although this application appears simple from the GUI perspective, the nuts and bolts under the hood created a challenging experience that required some extensive thought and problem-solving to get it to work properly. I learned that it’s always a good idea to conduct due diligence by completing a thorough pseudocoding to map out the project beforehand.",
      github: "https://github.com/acthomas83/hw3_PW_Algorithms.git",
      site: "https://acthomas83.github.io/hw3_PW_Algorithms/",
      image: "./images/pw_gen.png",
    }
]

var thisFunction = function(){
    console.log(passwordGenerator.name)
}

