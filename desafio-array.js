const programadores = [
    {
        nome: "Carlos",
        idade: 32 ,
        tecnologias:  [
            { nome: 'JavaScript', especialidade: 'Desktop' }, 
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }
        ] 
    }
]
console.log(`O usuário ${programadores[0].nome} tem ${programadores[0].idade} anos e usa a tecnologia 
${programadores[0].tecnologias[0].nome} com especialidade em ${programadores[0].tecnologias[0].especialidade}`)