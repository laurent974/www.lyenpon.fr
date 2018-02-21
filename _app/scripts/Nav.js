var Nav = {
  settings: {
    selector: ".js-openNav",
    nav: ".NavContainer"
  },

  bindClick: function() {
    var that = this;

    $(this.settings.selector).on('click', function() {
      $("body").find(that.settings.nav).toggleClass('NavContainer-Open');
    });
  },

  close: function() {
    var that = this;
    
    if ($("body").find(this.settings.nav).hasClass("NavContainer-Open")) {
      $("body").find(that.settings.nav).toggleClass('NavContainer-Open');
    }
  },

  init: function() {
    this.bindClick();
  }
}
