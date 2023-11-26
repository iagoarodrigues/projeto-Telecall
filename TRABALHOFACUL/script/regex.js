let errorEnviar = document.querySelector('#errorEnviar')
let sucessEnviar = document.querySelector('#sucessEnviar')

let nome = document.querySelector('#camponome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let mae = document.querySelector('#campomae')
let labelMae = document.querySelector('#labelmae')
let validMae = false

let cpf = document.querySelector('#campocpf')
let labelCPF = document.querySelector('#labelcpf')
let validCPF = false

let cel = document.querySelector('#campocel')
let labelCel = document.querySelector('#labelcel')
let validCel = false

let tel = document.querySelector('#campotel')
let labelTel = document.querySelector('#labeltel')
let validTel = false

let usuario = document.querySelector('#campouser')
let labelUser = document.querySelector('#labeluser')
let validUser = false

let senha = document.querySelector('#camposenha')
let labelSenha = document.querySelector('#labelsenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmsenha')
let labelConfirm = document.querySelector('#labelconfirm')
let validConfirm = false

let endereco = document.querySelector('#campoend')
let labelEndereco = document.querySelector('#labelend')
let validEndereco = false

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 15){
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        let validNome = false
    } else {
        labelNome.setAttribute('style', 'color: blue')
        nome.setAttribute('style', 'border-color: blue')
        let validNome = true
    }
})

mae.addEventListener('keyup', () => {
    if(mae.value.length <= 15){
        labelMae.setAttribute('style', 'color: red')
        mae.setAttribute('style', 'border-color: red')
        let validMae = false
    } else {
        labelMae.setAttribute('style', 'color: blue')
        mae.setAttribute('style', 'border-color: blue')
        let validMae = true
    }
})

function cpfRegex (cpf){
    const cpfRegex = /^d {3}.d {3}.d {3}-d {2}$/
    return cpfRegex.test(cpf)
}

cpf.addEventListener('keyup', () => {
    if(cpf.value.length < 14){
        labelCPF.setAttribute('style', 'color: red')
        cpf.setAttribute('style', 'border-color: red')
        let validCPF = false
    } else {
        labelCPF.setAttribute('style', 'color: blue')
        cpf.setAttribute('style', 'border-color: blue')
        let validCPF = true
    }
})

cel.addEventListener('keyup', () => {
    if(cel.value.length < 19){
        labelCel.setAttribute('style', 'color: red')
        cel.setAttribute('style', 'border-color: red')
        let validCel = false
    } else {
        labelCel.setAttribute('style', 'color: blue')
        cel.setAttribute('style', 'border-color: blue')
        let validCel = true
    }
})

tel.addEventListener('keyup', () => {
    if(tel.value.length < 18){
        labelTel.setAttribute('style', 'color: red')
        tel.setAttribute('style', 'border-color: red')
        let validTel = false
    } else {
        labelTel.setAttribute('style', 'color: blue')
        tel.setAttribute('style', 'border-color: blue')
        let validTel = true
    }
})

endereco.addEventListener('keyup', () => {
    if(endereco.value.length < 6){
        labelEndereco.setAttribute('style', 'color: red')
        endereco.setAttribute('style', 'border-color: red')
        let validEndereco = false
    } else {
        labelEndereco.setAttribute('style', 'color: blue')
        endereco.setAttribute('style', 'border-color: blue')
        let validEndereco = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length < 6){
        labelUser.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        let validUser = false
    } else {
        labelUser.setAttribute('style', 'color: blue')
        usuario.setAttribute('style', 'border-color: blue')
        let validUser = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 8){
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        let validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: blue')
        senha.setAttribute('style', 'border-color: blue')
        let validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmsenha.value){
        labelConfirm.setAttribute('style', 'color: red')
        labelConfirm.innerHTML = 'Confirmar Senha - As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        let validConfirm = false
    } else {
        labelConfirm.setAttribute('style', 'color: blue')
        labelConfirm.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: blue')
        let validConfirm = true
    }
})

function cadastrar(){
    if(validNome && validMae && validCPF && validCel && validTel && validEndereco && validUser && validSenha && validConfirm){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nomeCad: nome.value,
            maeCad: mae.value,
            cpfCad: cpf.value,
            celCad: cel.value,
            telCad: tel.value,
            endCad: endereco.value,
            userCad: usuario.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        sucessEnviar.setAttribute('style', 'display: block')
        sucessEnviar.innerHTML = '<strong> Cadastrando Usuário </strong>'
        errorEnviar.setAttribute('<style>', 'display: none')
        errorEnviar.innerHTML = ''
        
        setTimeout(()=>{
            window.location.href = "http://127.0.0.1:5500/index.html"
        }, 2999)

    } else {
        errorEnviar.setAttribute('style', 'display: block')
        errorEnviar.innerHTML = '<strong> Preencha os campos necessários </strong>'
        sucessEnviar.setAttribute('<style>', 'display: none')
        sucessEnviar.innerHTML = ''
    }
}