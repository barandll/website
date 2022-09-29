function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.mbl-cnt-bt')) {
      var dropdowns = document.getElementsByClassName("dropdown-cont");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.mbl-cat-bt')) {
      var dropdowns = document.getElementsByClassName("dropdown-cat");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
          openDropdown.classList.remove('show1');
        }
      }
    }
  }

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.mbl-abt-bt')) {
      var dropdowns = document.getElementsByClassName("dropdown-abt");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
  }

