const aluno01 = {
    nome: "Vitor",
    nota: 9.8
}

const aluno02 = {
    nome: "Mayk",
    nota: 10}

const aluno03 = {
    nome: "Diego",
    nota: 2
}


 
const media= (aluno01.nota + aluno02.nota + aluno03.nota) / 3

if (media >= 5) {
    console.log(`A media foi de ${media}. Parabens`)
}

else {
    console.log('media menor que 5')
}

console.log(media)