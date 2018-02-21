var HomeView = Barba.BaseView.extend({
  namespace: 'homepage',
  onEnter: function() {
    console.log('home');
    IndexAnimation.init();
  },
  onLeave: function() {
    IndexAnimation.destroy();
    Nav.close();
  },
  onLeaveCompleted: function() {

  }
});
