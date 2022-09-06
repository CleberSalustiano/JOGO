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

function validar(param) {
	let pontuacao = 0;
	const withFills = document.querySelectorAll(".withFill");
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

	if (param === "jogo1") {
		resultadoJogo1.pontuacao = pontuacao;
		sessionStorage.setItem("resultadoJogo1", JSON.stringify(resultadoJogo1));
		window.location.href = "../Jogo2/Fase1/index.html"; // window.open("../Jogo2/Fase1/index.html")
	} else if (param === "jogo2F1") {
		resultadoJogo2.fase1.pontuacao = pontuacao;
		sessionStorage.setItem(
			"resultadoJogo2F1",
			JSON.stringify(resultadoJogo2.fase1)
		);
		window.location.href = "../Fase2/index.html";
	} else if (param === "jogo2F2") {
		resultadoJogo2.fase2.pontuacao = pontuacao;
		sessionStorage.setItem(
			"resultadoJogo2F2",
			JSON.stringify(resultadoJogo2.fase2)
		);
		window.location.href = "../Fase3/index.html";
	} else if (param === "jogo2F3") {
		resultadoJogo2.fase3.pontuacao = pontuacao;
		sessionStorage.setItem(
			"resultadoJogo2F3",
			JSON.stringify(resultadoJogo2.fase3)
		);
		window.location.href = "../../Jogo3/index.html";
	} else if (param === "jogo3") {
		sessionStorage.setItem("resultadoJogo3", JSON.stringify(resultadoJogo3));
	}
}

function recupera() {
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

recupera();
console.log(resultadoJogo1, resultadoJogo2, resultadoJogo3);
