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


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault(); // stop page from reloading
      const query = document.querySelector("input[type='search']").value.toLowerCase();
      const items = document.querySelectorAll(".searchable");
      let firstMatch = null;
  
      items.forEach(item => {
        const card = item.closest(".col"); // gets bootstrap card column
        if (item.textContent.toLowerCase().includes(query)) {
          card.style.display = "block";
  
          // Save the first matching card to scroll to it
          if (!firstMatch) {
            firstMatch = card;
          }
        } else {
          card.style.display = "none";
        }
      });
  
      // Scroll to first match
      if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  