let quantid = 0;

function comparador() {
	return Math.random() - 0.5;
}

function qtdCartas(){

    quantid = Number(prompt("Com quantas cartas você quer jogar? (escolha um número par de 4 a 14)"));
    
    let imgverso = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot", "unicornparrot"];
    let Cartas_array = [];
    
    if (quantid%2 !== 0 || quantid < 4 || quantid > 14)
    qtdCartas();
    else{
        
        for(let i=0; i<(quantid/2); i++){
            let carta1dopar = `<div class="cartas" onclick="selecionar(this, 'cartas');">
             <img class="fig_frente" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" />
             <img class="fig_verso esconderelem" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${imgverso[i]}.gif">
             </div>`;
             
            Cartas_array.push(carta1dopar);
            Cartas_array.push(carta1dopar);
        }
        Cartas_array.sort(comparador);

        let CartastoHTML = document.querySelector(".boxcartas");
        for (let i=0; i<quantid; i++) {
            CartastoHTML.innerHTML += Cartas_array[i];
        }

    }

}
qtdCartas();

function selecionar(carta1dopar) {
    let facedown = carta1dopar.querySelector(".fig_frente");
    let faceup = carta1dopar.querySelector(".fig_verso");

    facedown.classList.add("esconderelem");
    faceup.classList.remove("esconderelem");

    toCompare(carta1dopar);
}            