// Simulación de entradas del blog (esto podría venir de una base de datos en el futuro)
const posts = [
  {
    titulo: "Bienvenido a mi blog",
    contenido: "Este es mi primer post en el blog. Aquí compartiré ideas, proyectos y pensamientos personales. ¡Gracias por visitar!"
  },
  {
    titulo: "Aprendiendo JavaScript",
    contenido: "JavaScript es un lenguaje esencial para el desarrollo web. Hoy aprendí sobre funciones y eventos del DOM."
  },
  {
    titulo: "Un día en la naturaleza",
    contenido: "Pasé el fin de semana en el campo, desconectado del mundo digital. Fue una experiencia refrescante y necesaria."
  }
];

function cargarPosts() {
  const contenedor = document.getElementById("posts");

  posts.forEach(post => {
    const entrada = document.createElement("article");
    entrada.classList.add("post");

    entrada.innerHTML = `
      <h2>${post.titulo}</h2>
      <p>${post.contenido}</p>
    `;

    contenedor.appendChild(entrada);
  });
}

document.addEventListener("DOMContentLoaded", cargarPosts);
