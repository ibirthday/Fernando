particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 400,
        },
      },
      color: {
        value: '#000000',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
      line_linked: {
        enable: false, // Desactiva las conexiones entre partículas
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 50,
          duration: 0.4,
        },
      },
    },
  });