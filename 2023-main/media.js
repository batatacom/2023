alert ("testando")

const form=document.querySelector("form")
const resp1=document.querySelector("h3")
const resp2=document.querySelector("h4")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = form.innome.value 
    const nota1 = number(form.innotal.value)
    const nota2 = number(form.innota2.value)

    const media = (nota1 + nota2)/2
    resp1.innertext = 'média das notas ${media.tofixed(2))}'

    if(media >=7){
        resp2.innertext = 'parabéns ${adolescente}! você foi aprovado(a)'
        resp2.style.color = "blue"
    }else if (media >=4) {
        resp2.innertext = 'atenção, você está de exame'
        resp2.style.color = "green"
    }else{
        resp2.innertext = 'ops ${aborrescente}! você foi reprovado(a)'
        resp2.style.color = 'red'
       }
    })