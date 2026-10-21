/* Legacy countdown removed.
  let clock;

  // Obtiene la fecha y hora actual
  let currentDate = new Date();

  // Ajusta la fecha y hora actual a la zona horaria de Colombia
  let targetDate = moment.tz("2026-11-01 15:00", "America/Bogota");

  // Calcula la diferencia entre la fecha objetivo y la fecha actual
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // Si la fecha objetivo ya ha pasado, muestra un mensaje y establece el temporizador en 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false,
    });
    console.log("El tiempo ya ha pasado!");
  } else {
    // Configura el temporizador
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () {
          console.log("El tiempo acabó!");
        },
      },
    });

    // Revisa el tiempo cada segundo
    setTimeout(function () {
      checktime();
    }, 1000);

    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function () {
        checktime();
      }, 1000);
    }
  }
*/

(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-nav');
  const links = document.querySelectorAll('.main-nav a');
  if (!toggle || !navigation) return;
  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  links.forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();
