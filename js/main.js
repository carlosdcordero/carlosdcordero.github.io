window.onhashchange = function () {
  window.history.pushState("", document.title, window.location.pathname);
};

new WOW().init();

document
  .querySelector("#contacto")
  .addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();

  let nombre = document.querySelector("#nombre").value;
  let correo = document.querySelector("#correo").value;
  let telefono = document.querySelector("#telefono").value;

  enviar(nombre, correo, telefono);

  document.querySelector("#contacto").reset();
}

function enviar(nombre, correo, telefono) {
  location.href = "#form";
  document.querySelector(".respuesta-mail").innerHTML =
    '<div class="animate__animated animate__bounce animate__infinite"><i class="fas fa-paper-plane"></i> Enviando, por favor espera...</div>';

  Email.send({
    SecureToken: "9515e946-ac93-491a-aa16-6c8f4adac009",
    To: "info@corderoweb.com",
    From: correo,
    Subject: `${nombre} solicita información en carlosdcordero.github.io`,
    Body: `Nombre: ${nombre}.<br>
                Teléfono: ${telefono}.<br>
                Correo: ${correo}.`,
  }).then((message) => {
    if (message == "OK") {
      location.href = "#form";
      document.querySelector(".respuesta-mail").innerHTML =
        '<div class="animate__animated animate__bounce"><i class="fas fa-check-circle"></i> ¡Mensaje enviado correctamente!</div>';
    } else {
      location.href = "#form";
      document.querySelector(".respuesta-mail").innerHTML =
        '<div class="animate__animated animate__bounce"><i class="fas fa-exclamation-circle"></i> Error: Debes llenar TODOS los campos.</div>';
    }
  });
}

const left = document.getElementById("left"),
  right = document.getElementById("right"),
  testimoniosSlider = document.querySelector(".testimonios-slider"),
  templateTestimonios = document.getElementById("template-testimonios").content,
  fragmentTestimonios = document.createDocumentFragment(),
  galeriaSlider = document.querySelector(".galeria"),
  templateGaleria = document.getElementById("galeria").content,
  fragmentGaleria = document.createDocumentFragment(),
  lightBox = document.querySelector(".light"),
  templateLightBox = document.getElementById("light-box").content,
  fragmentLightBox = document.createDocumentFragment();

let i = 1,
  testimonios = {
    1: {
      id: 1,
      imagen: "../img/testimonios/melvin-bravo.jpg",
      nombre: "Melvin Bravo",
      empresa: "Músico",
      testimonio:
        "Muchas gracias, quedo super genial, se adapta a mi perfil y el de mi empresa. Estoy contento y agradecido con su trabajo. Recomendaciones al 100%.",
    },
    2: {
      id: 2,
      imagen: "../img/testimonios/goals-up.jpg",
      nombre: "Golas Up",
      empresa: "",
      testimonio:
        "En Goals Up hemos trabajado con la empresa Cordero web en cuanto a la creación y desarrollo de dos páginas web. Ha sido un experiencia muy exitosa en cuanto a la calidad del servicio, respuesta inmediata y cumplimiento de tiempos. Contar con el apoyo de Cordero Web en nuestra empresa ha sido contar con todo un equipo de profesionales.",
    },
    3: {
      id: 3,
      imagen: "../img/testimonios/maskopets.jpg",
      nombre: "Maskopets",
      empresa: "",
      testimonio:
        "En Veterinaria maskopets recomendamos ampliamente a la empresa cordero web, son responsables del manejo y diseño de nuestras redes sociales en facebook e instagram. Contar con el apoyo de cordero web ha sido de gran ayuda para potenciar y mantener la presencia online de nuestra veterinaria. Agradecemos su responsabilidad y el estar siempre atentos. Estamos felices de haberlos elegido.",
    },
    4: {
      id: 4,
      imagen: "../img/testimonios/dargys-moreira.jpg",
      nombre: "Dargys Moreira",
      empresa: "Gerente Grupo Moreira",
      testimonio:
        "Espectacular mi logo!. Un sello que representa un esfuerzo familiar que trasciende generaciones. Una empresa de tradición. Gracias por darle imagen a un esfuerzo de años.",
    },
    5: {
      id: 5,
      imagen: "../img/testimonios/mariachi-tequila-show.jpg",
      nombre: "Mariachi Tequila Show",
      empresa: "",
      testimonio:
        "Gracias a Cordero Web por habernos creado la página web y nuestro logo. Lo mejor de lo mejor para su negocio.",
    },
    6: {
      id: 6,
      imagen: "../img/testimonios/maria-rondon.jpg",
      nombre: "María Rondón",
      empresa: "Diseñadora",
      testimonio:
        "Supieron escucharme y entenderme desde el primer momento. Siempre están allí para ayudarte. Quedé super complacida con el trabajo. Supieron traducir mis ideas y llevar a cabo mi sitio web. Los recomiendo 100%.",
    },
  },
  galeria = {
    1: {
      id: "#imagen1",
      imagen: "./img/portafolio/Honey Coffee 3.jpg",
    },
    2: {
      id: "#imagen2",
      imagen: "./img/portafolio/Tienda Demo 3.jpg",
    },
    3: {
      id: "#imagen3",
      imagen: "./img/portafolio/Maskopets 3.jpg",
    },
    4: {
      id: "#imagen4",
      imagen: "./img/portafolio/PetCare 3.jpg",
    },
    5: {
      id: "#imagen5",
      imagen: "./img/portafolio/Pets Smile 3.jpg",
    },
    6: {
      id: "#imagen6",
      imagen: "./img/portafolio/111 Producciones 3.jpg",
    },
    7: {
      id: "#imagen7",
      imagen: "./img/portafolio/Sphaera 3.jpg",
    },
    8: {
      id: "#imagen8",
      imagen: "./img/portafolio/Amor y Agua Viva 3.jpg",
    },
    9: {
      id: "#imagen9",
      imagen: "./img/portafolio/María Rondón 3.jpg",
    },
    10: {
      id: "#imagen10",
      imagen: "./img/portafolio/Cordero Web Veterinarias 3.jpg",
    },
    11: {
      id: "#imagen11",
      imagen: "./img/portafolio/2 Kafé con Leche 3.jpg",
    },
    12: {
      id: "#imagen12",
      imagen: "./img/portafolio/Dra Patricia González Médico Plus 3.jpg",
    },
  },
  light = {
    1: {
      id: "imagen1",
      prev: "#imagen12",
      imagen: "./img/portafolio/Honey Coffee 3.jpg",
      next: "#imagen2",
    },
    2: {
      id: "imagen2",
      prev: "#imagen1",
      imagen: "./img/portafolio/Tienda Demo 3.jpg",
      next: "#imagen3",
    },
    3: {
      id: "imagen3",
      prev: "#imagen2",
      imagen: "./img/portafolio/Maskopets 3.jpg",
      next: "#imagen4",
    },
    4: {
      id: "imagen4",
      prev: "#imagen3",
      imagen: "./img/portafolio/PetCare 3.jpg",
      next: "#imagen5",
    },
    5: {
      id: "imagen5",
      prev: "#imagen4",
      imagen: "./img/portafolio/Pets Smile 3.jpg",
      next: "#imagen6",
    },
    6: {
      id: "imagen6",
      prev: "#imagen5",
      imagen: "./img/portafolio/111 Producciones 3.jpg",
      next: "#imagen7",
    },
    7: {
      id: "imagen7",
      prev: "#imagen6",
      imagen: "./img/portafolio/Sphaera 3.jpg",
      next: "#imagen8",
    },
    8: {
      id: "imagen8",
      prev: "#imagen7",
      imagen: "./img/portafolio/Amor y Agua Viva 3.jpg",
      next: "#imagen9",
    },
    9: {
      id: "imagen9",
      prev: "#imagen8",
      imagen: "./img/portafolio/María Rondón 3.jpg",
      next: "#imagen10",
    },
    10: {
      id: "imagen10",
      prev: "#imagen9",
      imagen: "./img/portafolio/Cordero Web Veterinarias 3.jpg",
      next: "#imagen11",
    },
    11: {
      id: "imagen11",
      prev: "#imagen10",
      imagen: "./img/portafolio/2 Kafé con Leche 3.jpg",
      next: "#imagen12",
    },
    12: {
      id: "imagen12",
      prev: "#imagen11",
      imagen: "./img/portafolio/Dra Patricia González Médico Plus 3.jpg",
      next: "#imagen1",
    },
  };

const mostrarTestimonios = () => {
  testimoniosSlider.innerHTML = "";
  Object.values(testimonios).forEach((testimonio) => {
    const clone = templateTestimonios.cloneNode(true);
    clone.querySelector("img").src = testimonio.imagen;
    clone.querySelector("h4").textContent = testimonio.nombre;
    clone.querySelector("span").textContent = testimonio.empresa;
    clone.querySelector("p").textContent = testimonio.testimonio;
    fragmentTestimonios.appendChild(clone);
  });
  testimoniosSlider.appendChild(fragmentTestimonios);
};
mostrarTestimonios();

const mostrarGaleria = () => {
  galeriaSlider.innerHTML = "";
  Object.values(galeria).forEach((imagen) => {
    const clone = templateGaleria.cloneNode(true);
    clone.querySelector("img").src = imagen.imagen;
    clone.querySelector("a").href = imagen.id;
    fragmentGaleria.appendChild(clone);
  });
  galeriaSlider.appendChild(fragmentGaleria);
};
mostrarGaleria();

const mostrarLightBox = () => {
  lightBox.innerHTML = "";
  Object.values(light).forEach((imagen) => {
    const clone = templateLightBox.cloneNode(true);
    clone.querySelector("img").src = imagen.imagen;
    clone.querySelector("div").id = imagen.id;
    clone.querySelector(".prev").href = imagen.prev;
    clone.querySelector(".next").href = imagen.next;
    fragmentLightBox.appendChild(clone);
  });
  lightBox.appendChild(fragmentLightBox);
};
mostrarLightBox();

if (window.matchMedia("(max-width: 768px)").matches) {
  left.addEventListener("click", function () {
    if (i == 6) {
      testimoniosSlider.style.transform = `translateX(${-400}%)`;
      i = 5;
    } else if (i == 5) {
      testimoniosSlider.style.transform = `translateX(${-300}%)`;
      i = 4;
    } else if (i == 4) {
      testimoniosSlider.style.transform = `translateX(${-200}%)`;
      i = 3;
    } else if (i == 3) {
      testimoniosSlider.style.transform = `translateX(${-100}%)`;
      i = 2;
    } else if (i == 2) {
      testimoniosSlider.style.transform = `translateX(${0}%)`;
      i = 1;
    }
  });

  right.addEventListener("click", function () {
    if (i < testimoniosSlider.childElementCount) {
      testimoniosSlider.style.transform = `translateX(${-100 * i}%)`;
      i++;
    }
  });
} else {
  left.addEventListener("click", function () {
    if (i == 5) {
      testimoniosSlider.style.transform = `translateX(${-150}%)`;
      i = 4;
    } else if (i == 4) {
      testimoniosSlider.style.transform = `translateX(${-100}%)`;
      i = 3;
    } else if (i == 3) {
      testimoniosSlider.style.transform = `translateX(${-50}%)`;
      i = 2;
    } else if (i == 2) {
      testimoniosSlider.style.transform = `translateX(${0}%)`;
      i = 1;
    }
  });

  right.addEventListener("click", function () {
    if (i < testimoniosSlider.childElementCount - 1) {
      testimoniosSlider.style.transform = `translateX(${-50 * i}%)`;
      i++;
    }
  });
}
