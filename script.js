/*


7️Clone de site de receitas

 Inspirado em: TudoGostoso

API

https://www.themealdb.com/api.php

Exibir

imagem da receita

nome

categoria

país de origem

Interface

cards de receitas

botão ver detalhes

Treinar

manipulação de objetos grandes


*/


// dom 
const inputBuscar = document.getElementById("inputBuscar");
const caixareceitas = document.querySelector(".main__receitas");

async function buscarReceitas(nomeReceita) {

    try {

        if (nomeReceita === "") return;

        const resposta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nomeReceita}`);

        const dados = await resposta.json();

        mostrarReceita(dados.meals)

    } catch (erro) {

        console.log("Erro ao buscar receitas", erro);

    }

}

inputBuscar.addEventListener("input", () => {

    const nome = inputBuscar.value.trim();

    buscarReceitas(nome);

});


function mostrarReceita(receitas) {

    // limpando receitas

    caixareceitas.innerHTML = ""

    if (!receitas) {
        caixareceitas.innerHTML = "<p>Nenhuma receita encontrada</p>";
        return;
    }

    receitas.forEach(receita => {



        // criação de elementos

        const div = document.createElement("div");
        const buttonVerDatalhes = document.createElement("button")

        // classes
        div.classList.add("card", "p-3", "border", 'border-dark', 'bg-light', 'shadow-lg');
        buttonVerDatalhes.classList.add("text-light", "fw-bold");



        // css

        div.style.width = "300px";
        div.style.height = "500px"



        div.style.marginLeft = "10px"
        div.style.marginTop = "20px";
        div.style.paddingBottom = "30px"
        buttonVerDatalhes.style.width = "150px";
        buttonVerDatalhes.style.padding = "5px";
        buttonVerDatalhes.style.borderRadius = "10px";
        buttonVerDatalhes.style.border = "none";
        buttonVerDatalhes.style.backgroundColor = " #c84a00"

        buttonVerDatalhes.textContent = "ver detalhes"



        div.innerHTML = `
         
             <img src="${receita.strMealThumb}"/>

             <h5 class="fw-bold mt-2"> ${receita.strMeal} </h5>

             <p> Categoria:<span class="fw-bold"> ${receita.strCategory} </span> </p>

             <p> Origem: <span class="fw-bold">  ${receita.strArea} </span> </p>


         
         `

        div.appendChild(buttonVerDatalhes)

        caixareceitas.appendChild(div)

    });

}