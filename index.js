const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//vai passar a ter um evento ouvindo o botão, ouvindo ao receber um click e sua função se chama add
button.addEventListener('click', add)
//vai passar a ter um evento ouvindo o form, ouvindo ao receber um click e sua função se chama save
form.addEventListener("change", save)

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5); //verifica o dia em que foi clicado o botão e caso ele já não exista, é adicionado
    const dayExists = nlwSetup.dayExists(today); //verifica se a data já não existe na tabela
            if(dayExists){
                alert('⚠️ Essa data já existe.')
                return //quando em js há esse termo, o código para
            }
    nlwSetup.addDay(today) //adiciona o dia no quadro
}

function save(){
    localStorage.setItem('save@date', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem("save@date")) || {} //pega a informação do localstorage, transformou em objeto e devolveu ao código, caso não haja localstorage ele devolve um objeto vazio no || {}
    nlwSetup.setData(data)
    nlwSetup.load()