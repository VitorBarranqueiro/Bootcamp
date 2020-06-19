const empresa = [
   { nome:"Rocketseat",
    cor:"Roxo",
    foco:"Programação",
    endereço: {
        Rua: "Rua Guilherme Gembala",
        numero: 260
    }
   },

  { nome:"Tecnique",
   cor:"azul",
   foco:"Infraestrutura",
   endereço: {
       Rua: "Rua monte carmelo",
       numero: 126
   }
  }

]


console.log (`A empresa ${empresa[1].nome} está localizada em ${empresa[1].endereço.Rua},
${empresa[1].endereço.numero}.Seu segmento de atuação é ${empresa[1].foco}. `)

