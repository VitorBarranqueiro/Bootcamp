const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

//Percorra a lista de usuários com uma estrutura de repetição 
//for(let i = 0; i < usuarios.length; i++){
  // console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}`) 
//}


for(usuario of usuarios){
    console.log(`${usuario.nome} trabalha com as tecnologias ${usuario.tecnologias.join(", ")}`)
}