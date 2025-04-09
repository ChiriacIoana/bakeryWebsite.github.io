$(document).ready(function () {
    $("#contact-btn").click(function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $("footer").offset().top,
        },
        800 
      );
    });
  });
  
  $(document).ready(function() {
    $('#aboutUsBtn').click(function() {
      window.location.href = 'cluj.html#gallery';
    });
  });

  //search bar functionality
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault(); // stop page from reloading
      //console.log("Form submitted");
  
      //normalize the query
      const query = document.querySelector("input[type='search']").value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .trim();
      const items = document.querySelectorAll(".searchable");
      let firstMatch = null;

     // Handle redirect to other pages
    const pageRoutes = {
      "about us": "aboutUs.html",
      "aboutus": "aboutUs.html",
      "cluj": "cluj.html",
      "brasov": "brasov.html",
      "brașov": "brasov.html",
      "home": "index.html",
      "home page": "index.html",
      "in curând": "#",
    };

    if (pageRoutes[query]) {
      window.location.href = pageRoutes[query];
      //console.log("Redirecting to: " + pageRoutes[query]);
      return; 
    }
  
      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
          if (!firstMatch) {
            firstMatch = item;
          }
        }
      });
  
      if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
        firstMatch.classList.add("highlight");
        setTimeout(() => firstMatch.classList.remove("highlight"), 2000);
      }
    });
  });
  