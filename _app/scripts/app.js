var app = {
  transitionsInit: function() {
    Barba.Pjax.getTransition = function() {
      return Transition;
    };
  },
  viewsInit: function() {
    HomeView.init();
    ContactView.init();
  },
  init: function() {
    Nav.init();
    this.viewsInit();

    Barba.Pjax.start();
    this.transitionsInit();
    Barba.Prefetch.init();
  }
}

$(document).ready(function() {
  app.init();
});
