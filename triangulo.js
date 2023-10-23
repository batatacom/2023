const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 =- document.querySelector("#outResp1")

form.addEventListener ("submit", (e) =>{
    e.preventDefault()

    const ladoA = Number(form.inladoA.value)
    const ladoB = Number(form.inladoB.value)
    const ladoC = Number(form.inladoC.value)

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
        alert("As medidas não formam um triângulo pois um dos lados não pode ser maior que a soma dos outro dois.")
        form.inladoA.focus()
        form.inladoB.focus()
        form.inladoC.focus()
        return
    }

    resp.innerText = 'Lados podem formam um triângulo'

    if(ladoA == ladoB && ladoA == ladoC){
        resp1.innerText = 'Tipo: Equilátero'
    }else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
        resp1.innerText = 'Tipo: Isóceles'   
    }else{
        resp1.innerText = 'Tipo: Escaleno'
    }
}) 