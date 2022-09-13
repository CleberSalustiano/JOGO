var axios = require('axios');

function salvar(jogador, resultadoJogo1, resultadoJogo2, resultadoJogo3) {
  axios.post('https://sheetdb.io/api/v1/q47a20ioaj58g', {
    "data": {
      "idade": jogador.idade,
      "J1_qtd_acertos": resultadoJogo1.pontuacao,
      "J1_tempo": resultadoJogo1.tempo,
      "J2_f1_qtd_acertos": resultadoJogo2.fase1.pontuacao,
      "J2_f1_tempo": resultadoJogo2.fase1.tempo,
      "J2_f2_qtd_acertos": resultadoJogo2.fase2.pontuacao,
      "J2_f2_tempo": resultadoJogo2.fase2.tempo,
      "J2_f3_qtd_acertos": resultadoJogo2.fase3.pontuacao,
      "J2_f3_tempo": resultadoJogo2.fase3.tempo,
      "J3_tempo": resultadoJogo3.tempo
    }
  }, {
    "auth": {
      "username": "glviqtoo",
      "password": "mctz4qdq56lanz4yxqhq"
    }
  })
}

function coletar() {
  axios.get('https://sheetdb.io/api/v1/q47a20ioaj58g', {
    "auth": {
      "username": "glviqtoo",
      "password": "mctz4qdq56lanz4yxqhq"
    }
  }
  ).then(response => {
    response.data.map(object => {
      console.log(object.idade)
    })
  })
}


let jogador = { idade: 10 };
let resultadoJogo1 = {
  pontuacao: 20,
  tempo: 30,
};
let resultadoJogo2 = {
  fase1: { pontuacao: 10, tempo: 20 },
  fase2: { pontuacao: 30, tempo: 20 },
  fase3: { pontuacao: 40, tempo: 10 },
};
let resultadoJogo3 = {
  tempo: 30,
};


coletar();
// salvar(jogador, resultadoJogo1, resultadoJogo2, resultadoJogo3);


console.log("aoba");