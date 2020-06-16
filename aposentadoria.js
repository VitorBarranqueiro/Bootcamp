const name = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const tempoT = (idade + contribuicao)

let message = ""

if (sexo == "M") {
    if (tempoT >= 95) {
        message = `${name}, você pode se aposentar`
    } else {(tempoT < 95 && sexo =="M") || (tempoT <85 && sexo == "F")
    message = `${name}, você não pode se aposentar`
    }
  } else {(tempoT >=85)
            message = `${name}, você pode se aposentar`
    
  }
  console.log (tempoT)
console.log(message)