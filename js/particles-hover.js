document.querySelectorAll(".particles-hover").forEach((el, index) => {

  const id = "particles-" + index;
  el.setAttribute("id", id);

  particlesJS(id, {
    particles: {
      number: {
        value: 500
      },

      color: {
        value: "#ffffff"
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: 0.3,
        random: true
      },

      size: {
        value: 10,
        random: false
      },

      line_linked: {
        enable: false
      },

      move: {
        enable: true,
        speed: 0.5,
        random: true
      }
    },

    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: "stay"
        }
      },

      modes: {
        repulse: {
          distance: 8
        }
      }
    },

    retina_detect: true
  });

});