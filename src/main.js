let jogador = { idade: "" };
let resultadoJogo1 = {
  pontuacao: 0,
  tempo: 0,
};
let resultadoJogo2 = {
  fase1: { pontuacao: 0, tempo: 0 },
  fase2: { pontuacao: 0, tempo: 0 },
  fase3: { pontuacao: 0, tempo: 0 },
};
let resultadoJogo3 = {
  tempo: 0,
};
let cronometro;
let tempo = 0;

function validar(nomeJogo) {
  let pontuacao = 0;
  const withFills = document.querySelectorAll(".withFill");
  clearInterval(cronometro);
  for (const withFill of withFills) {
    if (
      withFill.children[0] !== undefined &&
      withFill.children[0].textContent === withFill.id
    ) {
      pontuacao++;
      withFill.className += " correct";
    } else {
      withFill.className += " wrong";
    }
  }

  if (nomeJogo === "jogo1") {
    resultadoJogo1.pontuacao = pontuacao;
    resultadoJogo1.tempo = tempo;
    sessionStorage.setItem("resultadoJogo1", JSON.stringify(resultadoJogo1));
    window.location.href = "../Jogo2/Fase1/index.html"; // window.open("../Jogo2/Fase1/index.html")
  } else if (nomeJogo === "jogo2F1") {
    resultadoJogo2.fase1.pontuacao = pontuacao;
    resultadoJogo2.fase1.tempo = tempo;
    sessionStorage.setItem(
      "resultadoJogo2F1",
      JSON.stringify(resultadoJogo2.fase1)
    );
    window.location.href = "../Fase2/index.html";
  } else if (nomeJogo === "jogo2F2") {
    resultadoJogo2.fase2.pontuacao = pontuacao;
    resultadoJogo2.fase2.tempo = tempo;
    sessionStorage.setItem(
      "resultadoJogo2F2",
      JSON.stringify(resultadoJogo2.fase2)
    );
    window.location.href = "../Fase3/index.html";
  } else if (nomeJogo === "jogo2F3") {
    resultadoJogo2.fase3.pontuacao = pontuacao;
    resultadoJogo2.fase3.tempo = tempo;
    sessionStorage.setItem(
      "resultadoJogo2F3",
      JSON.stringify(resultadoJogo2.fase3)
    );
    window.location.href = "../../Jogo3/index.html";
  } else if (nomeJogo === "jogo3") {
    resultadoJogo3.tempo = tempo;
    sessionStorage.setItem("resultadoJogo3", JSON.stringify(resultadoJogo3));
    enviaDados();
    sessionStorage.clear();
    // window.location.href = "../index.html"
  }
}

function recupera() {
  if (sessionStorage.getItem("jogadorIdade") !== null) {
    jogador.idade = JSON.parse(sessionStorage.getItem("jogadorIdade"));
  }
  if (sessionStorage.getItem("resultadoJogo1") !== null) {
    resultadoJogo1 = JSON.parse(sessionStorage.getItem("resultadoJogo1"));
  }
  if (sessionStorage.getItem("resultadoJogo2F1") !== null) {
    resultadoJogo2.fase1 = JSON.parse(
      sessionStorage.getItem("resultadoJogo2F1")
    );
  }
  if (sessionStorage.getItem("resultadoJogo2F2") !== null) {
    resultadoJogo2.fase2 = JSON.parse(
      sessionStorage.getItem("resultadoJogo2F2")
    );
  }
  if (sessionStorage.getItem("resultadoJogo2F3") !== null) {
    resultadoJogo2.fase3 = JSON.parse(
      sessionStorage.getItem("resultadoJogo2F3")
    );
  }
  if (sessionStorage.getItem("resultadoJogo3") !== null) {
    resultadoJogo3 = JSON.parse(sessionStorage.getItem("resultadoJogo3"));
  }
}

function getIdade() {
  const input = document.querySelector("#idade");
  if (input.value === " ") {
    window.alert("Precisar colocar a idade do jogador");
  } else {
    jogador.idade = input.value;
    sessionStorage.setItem("jogadorIdade", JSON.stringify(jogador.idade));
    window.location.href = "./Jogo1/index.html";
  }
}

function iniciarJogo() {
  const comecar = document.querySelector("#comecar");
  comecar.style.cssText = "display: hidden; top: -100vh";
  cronometro = setInterval(() => {
    tempo++;
  }, 1000);
}

function enviaDados() {
  // fazer envio de dados usando fetch
}

recupera();
console.log(jogador, resultadoJogo1, resultadoJogo2, resultadoJogo3);
