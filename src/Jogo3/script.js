const tela = document.querySelector("#tela");
const context = tela.getContext("2d");

const pincel = {
  ativo: false,
  movendo: false,
  pos: { x: 0, y: 0 },
  posAnterior: null,
};

tela.width = window.innerWidth;
tela.height = window.innerHeight;

context.lineWidth = 30;
context.lineCap = "round";
context.lineJoin = "round";
context.strokeStyle = "green";

var imagem = new Image();
imagem.src = "../assets/palavra_cavalo.png";

imagem.onload = function () {
  context.drawImage(
    imagem,
    window.innerWidth / 2 - imagem.width,
    window.innerHeight / 2 - imagem.height,
    832,
    354
  );
};

const Desenhar = (linha) => {
  context.beginPath();
  context.moveTo(linha.posAnterior.x, linha.posAnterior.y);
  context.lineTo(linha.pos.x, linha.pos.y);
  context.stroke();
};

tela.onmousedown = () => {
  pincel.ativo = true;
};
tela.onmouseup = () => {
  pincel.ativo = false;
};

tela.onmousemove = (event) => {
  pincel.pos.x = event.clientX;
  pincel.pos.y = event.clientY;
  pincel.movendo = true;
};

const ciclo = () => {
  if (pincel.ativo && pincel.movendo && pincel.posAnterior) {
    Desenhar({ pos: pincel.pos, posAnterior: pincel.posAnterior });
    pincel.movendo = false;
  }
  pincel.posAnterior = { ...pincel.pos };

  setTimeout(ciclo, 10);
};

ciclo();
