

const frm = document.querySelector("form")
const ini = document.getElementById("inicio")
const fim = document.getElementById("fim")
const res = document.getElementById("resultado")

document.getElementById("contar").addEventListener("click", (e) => {
    e.preventDefault()

    const start = Number(ini.value)
    const end = Number(fim.value)
    
    res.innerText = ""

    if(start <= end) {

        for(let i = start; i <= end; i++){
            res.innerText += `${i}, `
        }

    } else {
        for(let i = start; i >= end; i--){
            res.innerText += `${i}, `
        }
    }

    
    
    
})