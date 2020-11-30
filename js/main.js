window.onhashchange = function () {
    window.history.pushState('', document.title, window.location.pathname);
}

new WOW().init();

document.querySelector('#contacto').addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();

    let nombre = document.querySelector('#nombre').value;
    let correo = document.querySelector('#correo').value;
    let telefono = document.querySelector('#telefono').value;

    enviar(nombre, correo, telefono);

    document.querySelector('#contacto').reset();
}

function enviar(nombre, correo, telefono) {
    
    document.querySelector('.respuesta-mail').innerHTML = '<div class="animate__animated animate__bounce animate__infinite"><i class="fas fa-paper-plane"></i> Enviando, por favor espera...</div>';

    Email.send({
        SecureToken : '9515e946-ac93-491a-aa16-6c8f4adac009',
        To : 'info@corderoweb.com',
        From : correo,
        Subject : `${nombre} solicita información en carlosdcordero.github.io`,
        Body : `Nombre: ${nombre}.<br>
                Teléfono: ${telefono}.<br>
                Correo: ${correo}.`
    }).then(
      message => {
          if (message == 'OK') {
            document.querySelector('.respuesta-mail').innerHTML = '<div class="animate__animated animate__bounce"><i class="fas fa-check-circle"></i> ¡Mensaje enviado correctamente!</div>';
          } else {
            document.querySelector('.respuesta-mail').innerHTML = '<div class="animate__animated animate__bounce"><i class="fas fa-exclamation-circle"></i> Error: Debes llenar TODOS los campos.</div>';
          }
    });
}


const left = document.getElementById('left'),
right = document.getElementById('right'),

testimoniosSlider = document.querySelector('.testimonios-slider'),
templateTestimonios = document.getElementById('template-testimonios').content,
fragmentTestimonios = document.createDocumentFragment(),

galeriaSlider = document.querySelector('.galeria'),
templateGaleria = document.getElementById('galeria').content,
fragmentGaleria = document.createDocumentFragment(),

lightBox = document.querySelector('.light'),
templateLightBox = document.getElementById('light-box').content,
fragmentLightBox = document.createDocumentFragment();

let i = 1,

testimonios = {
    1: {
        id: 1,
        imagen: 'https://cemokalab.com/wp-content/uploads/2015/07/avatar-372-456324.png',
        nombre: 'Testimonio 1',
        empresa: 'Testimonios 1',
        testimonio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tempore quis voluptatum aut saepe laborum aperiam, perferendis ipsa autem ipsum mollitia eligendi neque ducimus accusantium dolorem id eos tempora fuga 1.'
    },
    2: {
        id: 2,
        imagen: 'https://www.mercotab.mx/front/img/Avatar-3.png',
        nombre: 'Testimonio 2',
        empresa: 'Testimonios 2',
        testimonio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tempore quis voluptatum aut saepe laborum aperiam, perferendis ipsa autem ipsum mollitia eligendi neque ducimus accusantium dolorem id eos tempora fuga 2.'
    },
    3: {
        id: 3,
        imagen: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
        nombre: 'Testimonio 3',
        empresa: 'Testimonios 3',
        testimonio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tempore quis voluptatum aut saepe laborum aperiam, perferendis ipsa autem ipsum mollitia eligendi neque ducimus accusantium dolorem id eos tempora fuga 3.'
    },
    4: {
        id: 4,
        imagen: 'https://www.metronethn.com/wp-content/uploads/2016/02/4_avatar-512.png',
        nombre: 'Testimonio 4',
        empresa: 'Testimonios 4',
        testimonio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident tempore quis voluptatum aut saepe laborum aperiam, perferendis ipsa autem ipsum mollitia eligendi neque ducimus accusantium dolorem id eos tempora fuga 4.'
    }
},

galeria = {
    1: {
        id: '#imagen1',
        imagen: './img/portafolio/Honey Coffee 3.jpg'
    },
    2: {
        id: '#imagen2',
        imagen: './img/portafolio/Tienda Demo 3.jpg'
    },
    3:{
        id: '#imagen3',
        imagen: './img/portafolio/Maskopets 3.jpg'
    },
    4: {
        id: '#imagen4',
        imagen: './img/portafolio/PetCare 3.jpg'
    },
    5: {
        id: '#imagen5',
        imagen: './img/portafolio/Pets Smile 3.jpg'
    },
    6: {
        id: '#imagen6',
        imagen: './img/portafolio/111 Producciones 3.jpg'
    },
    7: {
        id: '#imagen7',
        imagen: './img/portafolio/Sphaera 3.jpg'
    },
    8: {
        id: '#imagen8',
        imagen: './img/portafolio/Amor y Agua Viva 3.jpg'
    },
    9: {
        id: '#imagen9',
        imagen: './img/portafolio/María Rondón 3.jpg'
    },
    10: {
        id: '#imagen10',
        imagen: './img/portafolio/Cordero Web Veterinarias 3.jpg'
    },
    11: {
        id: '#imagen11',
        imagen: './img/portafolio/2 Kafé con Leche 3.jpg'
    },
    12: {
        id: '#imagen12',
        imagen: './img/portafolio/Dra Patricia González Médico Plus 3.jpg'
    },
},

light = {
    1: {
        id: 'imagen1',
        prev: '#imagen12',
        imagen: './img/portafolio/Honey Coffee 3.jpg',
        next: '#imagen2'
    },
    2: {
        id: 'imagen2',
        prev: '#imagen1',
        imagen: './img/portafolio/Tienda Demo 3.jpg',
        next: '#imagen3'
    },
    3: {
        id: 'imagen3',
        prev: '#imagen2',
        imagen: './img/portafolio/Maskopets 3.jpg',
        next: '#imagen4'
    },
    4: {
        id: 'imagen4',
        prev: '#imagen3',
        imagen: './img/portafolio/PetCare 3.jpg',
        next: '#imagen5'
    },
    5: {
        id: 'imagen5',
        prev: '#imagen4',
        imagen: './img/portafolio/Pets Smile 3.jpg',
        next: '#imagen6'
    },
    6: {
        id: 'imagen6',
        prev: '#imagen5',
        imagen: './img/portafolio/111 Producciones 3.jpg',
        next: '#imagen7'
    },
    7: {
        id: 'imagen7',
        prev: '#imagen6',
        imagen: './img/portafolio/Sphaera 3.jpg',
        next: '#imagen8'
    },
    8: {
        id: 'imagen8',
        prev: '#imagen7',
        imagen: './img/portafolio/Amor y Agua Viva 3.jpg',
        next: '#imagen9'
    },
    9: {
        id: 'imagen9',
        prev: '#imagen8',
        imagen: './img/portafolio/María Rondón 3.jpg',
        next: '#imagen10'
    },
    10: {
        id: 'imagen10',
        prev: '#imagen9',
        imagen: './img/portafolio/Cordero Web Veterinarias 3.jpg',
        next: '#imagen11'
    },
    11: {
        id: 'imagen11',
        prev: '#imagen10',
        imagen: './img/portafolio/2 Kafé con Leche 3.jpg',
        next: '#imagen12'
    },
    12: {
        id: 'imagen12',
        prev: '#imagen11',
        imagen: './img/portafolio/Dra Patricia González Médico Plus 3.jpg',
        next: '#imagen1'
    }
};

const mostrarTestimonios = () => {
    testimoniosSlider.innerHTML = '';
    Object.values(testimonios).forEach(testimonio => {
        const clone = templateTestimonios.cloneNode(true);
        clone.querySelector('img').src = testimonio.imagen;
        clone.querySelector('h4').textContent = testimonio.nombre;
        clone.querySelector('span').textContent = testimonio.empresa;
        clone.querySelector('p').textContent = testimonio.testimonio;
        fragmentTestimonios.appendChild(clone);
    });
    testimoniosSlider.appendChild(fragmentTestimonios);
};
mostrarTestimonios();

const mostrarGaleria = () => {
    galeriaSlider.innerHTML = '';
    Object.values(galeria).forEach(imagen => {
        const clone = templateGaleria.cloneNode(true);
        clone.querySelector('img').src = imagen.imagen;
        clone.querySelector('a').href = imagen.id;
        fragmentGaleria.appendChild(clone);
    });
    galeriaSlider.appendChild(fragmentGaleria);
};
mostrarGaleria();

const mostrarLightBox = () => {
    lightBox.innerHTML = '';
    Object.values(light).forEach(imagen => {
        const clone = templateLightBox.cloneNode(true);
        clone.querySelector('img').src = imagen.imagen;
        clone.querySelector('div').id = imagen.id;
        clone.querySelector('.prev').href = imagen.prev;
        clone.querySelector('.next').href = imagen.next;
        fragmentLightBox.appendChild(clone);
    });
    lightBox.appendChild(fragmentLightBox);
};
mostrarLightBox();

if (window.matchMedia('(max-width: 768px)').matches) {
    left.addEventListener('click', function() {
        if (i == 4) {
            testimoniosSlider.style.transform = `translateX(${-200}%)`;
            i=3;
        }
        else if (i == 3) {
            testimoniosSlider.style.transform = `translateX(${-100}%)`;
            i=2;
        }
        else if (i == 2) {
            testimoniosSlider.style.transform = `translateX(${0}%)`;
            i=1;
        }
    });
    
    right.addEventListener('click', function() {
        if (i < testimoniosSlider.childElementCount) {
            testimoniosSlider.style.transform = `translateX(${-100 * i}%)`;
            i++;
        }
    });
} else {
    left.addEventListener('click', function() {
        if (i == 3) {
            testimoniosSlider.style.transform = `translateX(${-50}%)`;
            i=2;
        }
        else if (i == 2) {
            testimoniosSlider.style.transform = `translateX(${0}%)`;
            i=1;
        }
    });
    
    right.addEventListener('click', function() {
        if (i < testimoniosSlider.childElementCount - 1) {
            testimoniosSlider.style.transform = `translateX(${-50 * i}%)`;
            i++;
        }
    });
}

