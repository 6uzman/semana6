
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidebar);

    var carousel = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(carousel);
  });