
  const texts = [
    "Informatika Student",
    "Tech Enthusiast"
  ];

  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  function type() {
    if (count === texts.length) count = 0;

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
        setTimeout(type, 300);
      }, 1500);
    } else {
      setTimeout(type, 100);
    }
  }

  type();



  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    // Dapetin posisi scroll
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // kasih offset biar navbar tinggi nggak ganggu
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    // Kalau scrollY di atas semua (belum masuk section manapun), aktifin #home
    if (scrollY < sections[0].offsetTop + 50) {
      current = "home";
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

