var ContactView = Barba.BaseView.extend({
  namespace: 'contactpage',
  onEnter: function() {
    console.log("contact");
    PageAnimation.init();
  },

  onLeave: function() {
    IndexAnimation.destroy();
  },

  onLeaveCompleted: function() {
  }
});
