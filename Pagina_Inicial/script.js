let likes = 0;

const likeBtn = document.getElementById("likeBtn");
const commentBtn = document.getElementById("commentBtn");
const likesSpan = document.getElementById("likes");
const comentariosDiv = document.getElementById("comentarios");

likeBtn.addEventListener("click", () => {
  likes++;
  likesSpan.innerText = likes;
});

commentBtn.addEventListener("click", () => {
  const comentario = prompt("Digite seu comentário:");
  if (comentario) {
    const p = document.createElement("p");
    p.innerText = comentario;
    comentariosDiv.appendChild(p);
  }
});

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
