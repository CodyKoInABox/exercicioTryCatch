const prompt = require('prompt-sync')()


let chocolates = parseInt(prompt("Quantos chocolates voce comprou? "))
let colegas = parseInt(prompt("Quantos colegas voce tem? "))

let chocolatesPorColega =  (chocolates - (chocolates % colegas)) / colegas

console.log("Chocolates por colega: " + chocolatesPorColega)
console.log("Chocolates que vao sobrar: " + chocolates % colegas)
