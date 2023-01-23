
let escolha = document.getElementById("escolha")
let botao = document.getElementById("button")

// Aqui é onde o usuário vai selecionar se quer codificiar ou decodificar
escolha.addEventListener("change", function (evento) {
    evento.preventDefault()

    let selecione = document.getElementById("selecione")

        if (evento.target.value == "cifraC") {
            selecione.style.display = "block"
        } 
        else {
            selecione.style.display = "none"
        }
})
// aui chamo do input do HTML para fazer a ação se vai codificar ou decodificar
let rb= document.querySelectorAll('input[name="r1"]')

rb.forEach((radio) => {
    radio.addEventListener("change", function (evento) {
        evento.preventDefault()


        if (evento.target.value == "decode") {
            botao.innerHTML = "Decodificar "
           
        } else {
            botao.innerHTML = "Codificar"
          
        }
    })
})

//aqui é onde o usuário vai selecionar qual ferramenta quer usar
function click(){

    if(escolha.value == "cifraC"){
        cifra()
        console.log("Funciona")
    }

    else{
        base()
        console.log("Funciona")
    }

}

// Aqui entra as informações que o usuário enviou
let form =  document.forms.formulario

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    let texto = form.texto.value
    let escolha = form.escolha.value
    let number = form.number.value
    let rb = form.r1.value
    let mensagem = ''
// condicionei para qual opção o usuário quer usar
    if(escolha == 'cifraC'){
        mensagem = cifra(rb, texto, number)
    }

    else{
        mensagem = base(rb, texto)
    }

    let resposta = document.getElementById('mensagem')
    resposta.innerHTML = `${mensagem}`

    

    form.texto.focus()
})

//BASE64
function base(r1, texto){
    if(r1 == 'code'){
        return btoa(texto)
    }

    else{
        return atob(texto)
    }
}

//caso ele chame a cifra de cesar o number vai ser o incremento 
//CIFRA DE CÉSAR
function cifra(rb, texto, number){
    number = Number(number)

    let resultado = ''

    for(let i = 0; i < texto.length; i++) {
        let letra = texto[i]
        let code = letra.charCodeAt()

        if (rb == 'code') {
            code += number
        }

        else{
            code -= number
        }

        resultado += String.fromCharCode(code)
    
    }

    return resultado
}