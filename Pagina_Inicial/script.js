//função para like e comentarios
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
//modoescuro
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
//função para o balãodemensagens
function toggleMensagens() {
  const corpo = document.getElementById("corpoMensagens");
  const icon = document.getElementById("toggle-icon");

  corpo.style.display = corpo.style.display === "block" ? "none" : "block";
  icon.className =
    corpo.style.display === "block" ? "bx bx-chevron-down" : "bx bx-chevron-up";
}
