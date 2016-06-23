var main = function() {
  $(".btn-projects").click(function() {
      $('html,body').animate({
          scrollTop: $(".carousel").offset().top},
          'slow');
  });
  $(".btn-about").click(function() {
      $('html,body').animate({
          scrollTop: $(".bio").offset().top},
          'slow');
  });
};

$(document).ready(main);
