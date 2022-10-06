const table = document.querySelector("#table");

let url = "https://sheetdb.io/api/v1/q47a20ioaj58g";
let username = "glviqtoo";
let password = "mctz4qdq56lanz4yxqhq";

let headers = new Headers();
headers.set("Authorization", "Basic " + btoa(username + ":" + password));

fetch(url, { method: "GET", headers: headers })
  .then((response) => response.json())
  .then((arrayAlunos) => {
    console.log(arrayAlunos);
    let count = 1;
    let htmlTable = "";
    let idade = 0,
      J1_tempo = 0,
      J1_qtd_acertos = 0,
      J2_f1_tempo = 0,
      J2_f1_qtd_acertos = 0,
      J2_f2_tempo = 0,
      J2_f2_qtd_acertos = 0,
      J2_f3_tempo = 0,
      J2_f3_qtd_acertos = 0,
      J3_tempo = 0;
    arrayAlunos.map((aluno) => {
      idade += +aluno.idade;
      J1_tempo += +aluno.J1_tempo;
      J1_qtd_acertos += +aluno.J1_qtd_acertos;
      J2_f1_tempo += +aluno.J2_f1_tempo;
      J2_f1_qtd_acertos += +aluno.J2_f1_qtd_acertos;
      J2_f2_tempo += +aluno.J2_f2_tempo;
      J2_f2_qtd_acertos += +aluno.J2_f2_qtd_acertos;
      J2_f3_tempo += +aluno.J2_f3_tempo;
      J2_f3_qtd_acertos += +aluno.J2_f3_qtd_acertos;
      J3_tempo += +aluno.J3_tempo;
      htmlTable += `
    <tr>
      <th>Aluno${count}</th>
      <td>${aluno.idade}</td>
      <td>${
        +aluno.J1_tempo >= 60
          ? +aluno.J1_tempo - Math.trunc(+aluno.J1_tempo / 60)*60 >= 10
            ? Math.trunc(+aluno.J1_tempo / 60) +
              ":" +
              (+aluno.J1_tempo -
              Math.trunc(+aluno.J1_tempo / 60) * 60)
            : Math.trunc(+aluno.J1_tempo / 60) +
              ":0" +
              (+aluno.J1_tempo -
              Math.trunc(+aluno.J1_tempo / 60) * 60)
          : +aluno.J1_tempo >= 10
          ? "0:" + aluno.J1_tempo
          : "0:0" + aluno.J1_tempo
      }</td>
      <td>${((+aluno.J1_qtd_acertos / 26) * 100).toPrecision(3)}</td>
      <td>${
        +aluno.J2_f1_tempo >= 60
          ? +aluno.J2_f1_tempo - Math.trunc(+aluno.J2_f1_tempo / 60)*60 >= 10
            ? Math.trunc(+aluno.J2_f1_tempo / 60) +
              ":" +
              (+aluno.J2_f1_tempo -
              Math.trunc(+aluno.J2_f1_tempo / 60)*60)
            : Math.trunc(+aluno.J2_f1_tempo / 60) +
              ":0" +
              (+aluno.J2_f1_tempo -
              Math.trunc(+aluno.J2_f1_tempo / 60)*60)
          : +aluno.J2_f1_tempo >= 10
          ? "0:" + aluno.J2_f1_tempo
          : "0:0" + aluno.J2_f1_tempo
      }</td>
      <td>${((+aluno.J2_f1_qtd_acertos / 2) * 100).toPrecision(3)}</td>
      <td>${
        +aluno.J2_f2_tempo >= 60
          ? +aluno.J2_f2_tempo - Math.trunc(+aluno.J2_f2_tempo / 60)*60 >= 10
            ? Math.trunc(+aluno.J2_f2_tempo / 60) +
              ":" +
              (+aluno.J2_f2_tempo -
              Math.trunc(+aluno.J2_f2_tempo / 60)*60)
            : Math.trunc(+aluno.J2_f2_tempo / 60) +
              ":0" +
              (+aluno.J2_f2_tempo -
              Math.trunc(+aluno.J2_f2_tempo / 60) * 60)
          : +aluno.J2_f2_tempo >= 10
          ? "0:" + aluno.J2_f2_tempo
          : "0:0" + aluno.J2_f2_tempo
      }</td>
      <td>${((+aluno.J2_f2_qtd_acertos / 3) * 100).toPrecision(3)}</td>
      <td>${
        +aluno.J2_f3_tempo >= 60
          ? +aluno.J2_f3_tempo - Math.trunc(+aluno.J2_f3_tempo / 60)*60 >= 10
            ? Math.trunc(+aluno.J2_f3_tempo / 60) +
              ":" +
             ( +aluno.J2_f3_tempo -
              Math.trunc(+aluno.J2_f3_tempo / 60)*60)
            : Math.trunc(+aluno.J2_f3_tempo / 60) +
              ":0" +
             ( +aluno.J2_f3_tempo -
              Math.trunc(+aluno.J2_f3_tempo / 60)*60)
          : +aluno.J2_f3_tempo >= 10
          ? "0:" + aluno.J2_f3_tempo
          : "0:0" + aluno.J2_f3_tempo
      }</td>
      <td>${((+aluno.J2_f3_qtd_acertos / 3) * 100).toPrecision(3)}</td>
      <td>${
        +aluno.J3_tempo >= 60
          ? +aluno.J3_tempo - Math.trunc(+aluno.J3_tempo / 60)*60 >= 10
            ? Math.trunc(+aluno.J3_tempo / 60) +
              ":" +
             ( +aluno.J3_tempo -
              Math.trunc(+aluno.J3_tempo / 60) *60 )
            : Math.trunc(+aluno.J3_tempo / 60) +
              ":0" +
              (+aluno.J3_tempo -
              Math.trunc(+aluno.J3_tempo / 60) *60)
          : +aluno.J3_tempo >= 10
          ? "0:" + aluno.J3_tempo
          : "0:0" + aluno.J3_tempo
      }</td>
    </tr>
    `;
      count++;
    });
    idade = idade / (count - 1);
    J1_tempo = J1_tempo / (count - 1);
    J1_qtd_acertos = J1_qtd_acertos / (count - 1);
    J2_f1_tempo = J2_f1_tempo / (count - 1);
    J2_f1_qtd_acertos = J2_f1_qtd_acertos / (count - 1);
    J2_f2_tempo = J2_f2_tempo / (count - 1);
    J2_f2_qtd_acertos = J2_f2_qtd_acertos / (count - 1);
    J2_f3_tempo = J2_f3_tempo / (count - 1);
    J2_f3_qtd_acertos = J2_f3_qtd_acertos / (count - 1);
    J3_tempo = J3_tempo / (count - 1);
    table.innerHTML = `
  <table>
    <tr>
      <th rowspan="2">Alunos</th>
      <th rowspan="2">Idade</th>
      <th colspan="2">Jogo do Alfabeto</th>
      <th colspan="2">Jogo das Sílabas - Fase 1</th>
      <th colspan="2">Jogo das Sílabas - Fase 2</th>
      <th colspan="2">Jogo das Sílabas - Fase 3</th>
      <th>Jogo de Escrever</th>
    </tr>
    <tr>
      <th>Tempo (m:ss)</th>
      <th>Acertos(%)</th>
      <th>Tempo (m:ss)</th>
      <th>Acertos(%)</th>
      <th>Tempo (m:ss)</th>
      <th>Acertos(%)</th>
      <th>Tempo (m:ss)</th>
      <th>Acertos(%)</th>
      <th>Tempo (m:ss)</th>
    </tr>
    ${htmlTable}
    <tr>
      <th>Total</th>
      <td> ${Math.trunc(idade)} </td>
      <td>
        ${
          +J1_tempo >= 60
            ? +J1_tempo - 60 >= 10
              ? Math.trunc(+J1_tempo / 60) + ":" + (+J1_tempo - 60)
              : Math.trunc(+J1_tempo / 60) + ":0" + (+J1_tempo - 60)
            : +Math.trunc(+J1_tempo) >= 10
            ? "0:" + Math.trunc(+J1_tempo)
            : "0:0" + Math.trunc(+J1_tempo)
        }
      </td>
      <td>${((+J1_qtd_acertos / 26) * 100).toPrecision(3)}</td>
      <td>${
        +J2_f1_tempo >= 60
            ? +J2_f1_tempo - 60 >= 10
              ? Math.trunc(+J2_f1_tempo / 60) + ":" + (+J2_f1_tempo - 60)
              : Math.trunc(+J2_f1_tempo / 60) + ":0" + (+J2_f1_tempo - 60)
            : +Math.trunc(+J2_f1_tempo) >= 10
            ? "0:" + Math.trunc(+J2_f1_tempo)
            : "0:0" + Math.trunc(+J2_f1_tempo)
      }</td>
      <td>${((+J2_f1_qtd_acertos / 2) * 100).toPrecision(3)}</td>
      <td>${
        +J2_f2_tempo >= 60
            ? +J2_f2_tempo - 60 >= 10
              ? Math.trunc(+J2_f2_tempo / 60) + ":" + (+J2_f2_tempo - 60)
              : Math.trunc(+J2_f2_tempo / 60) + ":0" + (+J2_f2_tempo - 60)
            : +Math.trunc(+J2_f2_tempo) >= 10
            ? "0:" + Math.trunc(+J2_f2_tempo)
            : "0:0" + Math.trunc(+J2_f2_tempo)
      }</td>
      <td>${((+J2_f2_qtd_acertos / 3) * 100).toPrecision(3)}</td>
      <td>${
        +J2_f3_tempo >= 60
        ? +J2_f3_tempo - 60 >= 10
          ? Math.trunc(+J2_f3_tempo / 60) + ":" + (+J2_f3_tempo - 60)
          : Math.trunc(+J2_f3_tempo / 60) + ":0" + (+J2_f3_tempo - 60)
        : +Math.trunc(+J2_f3_tempo) >= 10
        ? "0:" + Math.trunc(+J2_f3_tempo)
        : "0:0" + Math.trunc(+J2_f3_tempo)
      }</td>
      <td>${((+J2_f3_qtd_acertos / 3) * 100).toPrecision(3)}</td>
      <td>${
        +J3_tempo >= 60
            ? +J3_tempo - 60 >= 10
              ? Math.trunc(+J3_tempo / 60) + ":" + (+J3_tempo - 60)
              : Math.trunc(+J3_tempo / 60) + ":0" + (+J3_tempo - 60)
            : +Math.trunc(+J3_tempo) >= 10
            ? "0:" + Math.trunc(+J3_tempo)
            : "0:0" + Math.trunc(+J3_tempo)
      }</td>
    </tr>
  </table>
  `;
  });
