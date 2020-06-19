const name = "Carlos"
const peso = 84
const altura = 1.88


//calcular imc

const imc = (peso /(altura * altura))
console.log(imc)

let message = ""

if
    (imc >= 30)
    message = `${name} voce esta acima do peso`
else
    (imc < 30)
        message =`${name} voce não esta acima do peso`

console.log(message)        