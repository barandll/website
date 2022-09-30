function myFunc(){
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === 'password'){
       x.type = "text";
       y.style.display = "block";
       z.style.display = "none"; 
    }else{
       x.type = "password";
       y.style.display = "none";
       z.style.display = "block";   
    }
}

let loginButton = document.querySelector("#login-btnn");
let loginPanel = document.querySelector(".popup-overlay");

loginButton.onclick = () => {
    loginPanel.style.display = "block";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  });

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };


}

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      loginPanel.style.display = 'none'
    }
    window.onscroll = function() {};
  })
