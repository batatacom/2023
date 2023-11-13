const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e)=> {
   e.preventDefault()

   const nome = form.innome.value
   const masculino = form.inmasculino.checked
   const altura = Number(form.inaltura.value)

   let peso
   if (masculino) {
    peso = 22 * Math.pow(altura, 2)
   } else {
    peso = 21 * Math.pow(altura, 2)
   }
   resp.innerText = `${nome} seu peso ideal de é: ${peso.toFixed(3)}kg`
})


form.addEventListener("reset", (e) => {
    resp.innertext = " "
})