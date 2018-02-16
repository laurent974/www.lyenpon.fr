var IndexAnimation = {
  settings: {
    id: 'indexParticle',
    configFile: 'indexjs-config.json'
  },

  init: function() {
    var that = this;
    particlesJS(that.settings.id,
      {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"","width":0,"height":0}},"opacity":{"value":0.42490419612936353,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4.008530152163807,"random":true,"anim":{"enable":true,"speed":2.4362316369040355,"size_min":15.429467033725558,"sync":true}},"line_linked":{"enable":true,"distance":80.17060304327615,"color":"#ffffff","opacity":0.41688713582503595,"width":1},"move":{"enable":true,"speed":6,"direction":"right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1523.2414578222467}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
  }
}
