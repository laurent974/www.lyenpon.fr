var ContactView = Barba.BaseView.extend({
  namespace: 'contactpage',
  onEnter: function() {
    console.log("contact");
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
