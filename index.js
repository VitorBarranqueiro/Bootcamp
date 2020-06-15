const aluno01= 'Vitor'
const notaAluno01= 9.8

const aluno02= 'Mayk'
const notaAluno02= 10

const aluno03= 'Diego'
const notaAluno03= 2
 
const media= (notaAluno01 + notaAluno02 + notaAluno03) / 3

if (media >= 5) {
    console.log(`A media foi de ${media}. Parabens`)
}

else {
    console.log('media menor que 5')
}

console.log(media)