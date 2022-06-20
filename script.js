let quantid = 0;

function embaralhar() {
	return Math.random() - 0.5;
}

function qtdCartas(){
    quantid = Number(prompt("Com quantas cartas você quer jogar? (escolha um número par de 4 a 14)"));
    
    let imgverso = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
    let Cartas_array = [];
    
    if (quantid%2 !== 0 || quantid < 4 || quantid > 14)
    qtdCartas();
    else{        
        for(let i=0; i<(quantid/2); i++){
            let carta_davez = `<div class="cartas" onclick="selecionar(this, 'cartas');">
             <img class="fig_frente" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" />
             <img class="fig_verso esconderelem" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${imgverso[i]}.gif">
             </div>`;
             
            Cartas_array.push(carta_davez);
            Cartas_array.push(carta_davez);
        }
        Cartas_array.sort(embaralhar);

        let CartastoHTML = document.querySelector(".boxcartas");

        for (let i=0; i<Cartas_array.length; i++) {
            CartastoHTML.innerHTML += Cartas_array[i];
        }
    }
}
qtdCartas();

let cont = 0;

function selecionar(carta_davez) {
    let facedown = carta_davez.querySelector(".fig_frente");
    facedown.classList.add("esconderelem");
    
    let faceup = carta_davez.querySelector(".fig_verso");
    faceup.classList.remove("esconderelem");

    cont++;
    Comparador(carta_davez);

    carta_davez.setAttribute("onclick", "");
}

let carta_anterior = null;   
let cartasIguais = 0;

function Comparador(carta_davez) {
    if(carta_anterior === null){
        carta_anterior = carta_davez;
    }else if (carta_anterior.innerHTML === carta_davez.innerHTML){
        cartasIguais++;
        carta_anterior = null;
        if(cartasIguais === quantid/2)
            setTimeout(() => alert(`Parabéns! Você ganhou em ${cont} jogadas!`), 300);      
    }else{
        cartasDiferentes(carta_anterior, carta_davez);
        carta_anterior = null;
    }
}

function cartasDiferentes(carta_anterior, carta_davez){

    setTimeout(() => desvirarCartas(carta_anterior, carta_davez), 1000);
    function desvirarCartas(carta_anterior, carta_davez){
        let desfaz_facedown2 = carta_anterior.querySelector(".fig_frente");
        desfaz_facedown2.classList.remove("esconderelem");

        let desfaz_faceup2 = carta_anterior.querySelector(".fig_verso");
        desfaz_faceup2.classList.add("esconderelem");

        carta_anterior.setAttribute("onclick", "selecionar(this,'cartas');" ) ;

        let desfaz_facedown = carta_davez.querySelector(".fig_frente");
        desfaz_facedown.classList.remove("esconderelem");   

        let desfaz_faceup = carta_davez.querySelector(".fig_verso");
        desfaz_faceup.classList.add("esconderelem");

        carta_davez.setAttribute( "onclick", "selecionar(this,'cartas');" ) ;
    }
}