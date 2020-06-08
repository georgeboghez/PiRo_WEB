window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('#country-input')) {
    var countries = document.getElementById("dropdown-countries")
    if (countries.classList.contains('show')) {
      countries.classList.remove('show');
    }
  }
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}