var AboutView = Barba.BaseView.extend({
  namespace: 'aboutpage',
  onEnter: function() {
    console.log("about");
  },

  onEnterCompleted: function() {
    PageAnimation.init();
  },

  onLeave: function() {
    IndexAnimation.destroy();
    Nav.close();
  },

  onLeaveCompleted: function() {
  }
});
