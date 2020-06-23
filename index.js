const alunosDaTurmaA = [
    {
    nome: "Vitor",
    nota: 9.8
},
 {
    nome: "Mayk",
    nota: 10
}
    ,

 {
    nome: "Diego",
    nota: 2
},

]

const alunosDaTurmaB = [

    {
    nome: "Fabio",
    nota: 8
},
 {
    nome: "Cleiton",
    nota: 3
 },

 {
    nome: "Felipe",
    nota: 2
 },
 {
     nome: "novo aluno",
     nota: 8
 }

]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota 
    }
    const media = soma / alunos.length
    return media  
}

 
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMsg(media, turma) {

if (media >= 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabens`)
    }

else {
    console.log(`media da ${turma} menor que 5`)
    }
}


enviaMsg(media1, 'turma A') 
enviaMsg(media2, 'turma B')

function reprovados (aluno){
            aluno.reprovado = false;
        if (aluno.nota < 5) {
            aluno.reprovado = true;
            
        } 
        //else {
            
        //}
    }


function comunicarep (aluno){
    if (aluno.reprovado) {
 console.log(`Aluno ${aluno.nome} esta reprovado`)       
    } 

}

function alunorep(alunos){
    for(let aluno of alunos){
        reprovados(aluno)
        comunicarep(aluno)
    }
}

alunorep(alunosDaTurmaA)
alunorep(alunosDaTurmaB)