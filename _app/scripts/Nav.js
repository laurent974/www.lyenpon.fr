var Nav = {
  settings: {
    selector: ".js-openNav",
    nav: ".NavContainer"
  },

  bindClick: function() {
    var that = this;

    $(this.settings.selector).on('click', function() {
      $(that.settings.nav).toggleClass('NavContainer-Open');
    });
  },

  init: function() {
    this.bindClick();
  }
}
