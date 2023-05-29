let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("CSharp");
        habilidades[3].classList.add("vue");
        habilidades[4].classList.add("blazor");
        habilidades[5].classList.add("net");
        habilidades[6].classList.add("scriban");
        habilidades[7].classList.add("POO");
        habilidades[8].classList.add("sql");
        // habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function descargarCV() {
  var nombreArchivo = './cv/CV- MATIAS.pdf';
  var enlaceDescarga = document.createElement('a');
  
  enlaceDescarga.href = nombreArchivo;
  enlaceDescarga.download = 'CV- MATIAS.pdf';

  // Agregar el enlace al documento y hacer clic en él
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace del documento
  document.body.removeChild(enlaceDescarga);
}


const btn = document.getElementById('button');
const formulario = document.getElementById('form');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ix8rvxg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = 'Enviar Mensaje <i class="fa-solid fa-paper-plane"></i> <span class="overlay"></span>';
      formulario.reset();
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
