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