const obtenerRecetas = async() => {

    try{
  
      const respuesta = await fetch(`https://sazonapi.onrender.com/api/v1/recipies`);
      // console.log(respuesta);
      if(respuesta.status === 200) {
        const datos = await respuesta.json();
        completarRecetas(datos);
      }
    }
  
    catch(error){
      console.log(error.message);
    }
  }
  
  const completarRecetas = (recetas) => {
    const carouselInner = document.querySelector('.carousel-inner');
    
    recetas.data.forEach((receta, index) => {
      const isActive = index === 0 ? 'active' : '';
      const template = `
        <div class="carousel-item ${isActive}">
          <div class="col-12 col-md-6 col-lg-4 mx-auto bg-alfajores receta">
            <img src="${receta.imagen}" class="card-img-top img-fluid" alt="${receta.nombre}">
            <div class="card-body d-flex flex-column align-content-center align-items-center">
              <h5 class="card-title text-color-alfajores text-justify pt-3">${receta.nombre}</h5>
              <p class="card-text text-justify pb-3">${receta.descripcion_tipo}</p>
              <a href="#" class="btn btn-alfajores text-color-alfajores mb-4"><small>PREPARACIÓN</small></a>
            </div>
          </div>
        </div>
      `;
      carouselInner.insertAdjacentHTML('beforeend', template);
    });
  };
  
  const habilitarCarousel = () => {
    const carousel = new bootstrap.Carousel(document.querySelector('.carousel'), {
      interval: 5000, // la animación automática es de 5 segundos
    });
  
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
  
    prevButton.addEventListener('click', () => {
      carousel.prev(); 
    });
  
    nextButton.addEventListener('click', () => {
      carousel.next();
    });
  };
    
  // Llama a la función para llenar las tarjetas y habilitar el carrusel
  obtenerRecetas();
  habilitarCarousel();