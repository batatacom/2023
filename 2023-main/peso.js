const form = document.querySelector("fora")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e)=> {
   e.preventDefault()

   const nome = form.innome.value
   const masculino = fom.inmasculino.checked
   const altura = number (form.inaltura.value)

   let perso
   if (masculino) {
    peso = 22 * Math.pow(altura, 2)
   } else {
    peso = 21 * Math.pow(altura, 2)
   }

   resp.innertext = '$ {nome} seu peso ideal de é: ${peso.tofixed(3)kg' 
})


form.addEventListener("reset", (e) => {
    resp.innertext = " "
})