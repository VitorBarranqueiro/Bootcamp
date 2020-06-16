const name = "Silvana";
const sexo = "F";
const idade = 58;
const contribuicao = 30;

const tempoT = (idade + contribuicao)

const aposentaM = (tempoT >= 95 && sexo == "M" && contribuicao > 34)
const aposentaF = (tempoT >= 85 && sexo == "F" && contribuicao > 29)


//
let message = ""

if (aposentaM == true || aposentaF == true){
    message = `${name} voce pode se aposentar`
}
 else (
    message = `${name} voce não pode se aposentar`
 )
  
console.log (tempoT)
console.log(message)