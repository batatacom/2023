const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

let numcontas= 0
let valtotal= 0
let resposta= ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.indescricao.value
    const valor = Number(frm.invalor.value)
  
    numcontas++
    valtotal = valtotal + valor

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    
    resp1.innertext = `${resposta}--------------------------------`
    resp2.innertext = `${numcontas} conta(s) - total R$: ${valtotal.toFixed(2)}`
    
    frm.indescricao.value = "" 
    frm.invalor.value= ""
    frm.indescricao.focus()
})