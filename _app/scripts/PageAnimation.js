var PageAnimation = {
  settings: {
    id: 'pageParticle',
  },
  init: function() {
    var that = this;
    particlesJS(that.settings.id,
      {
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": ["#3CA898","#DD513C","#384C5C"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": ["#3CA898","#DD513C","#384C5C"]
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.25654592973848367,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1.6241544246026902,
              "opacity_min": 0.06496617698410762,
              "sync": false
            }
          },
          "size": {
            "value": 4.008530152163807,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 14.617389821424212,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 256.54592973848366,
            "color": "#141414",
            "opacity": 0.2244776885211732,
            "width": 0.16034120608655228
          },
          "move": {
            "enable": true,
            "speed": 1.603412060865523,
            "direction": "right",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
  }
}
