
let op = prompt(`QUal a operação desejada
    a = adição
    s = subtração
    m = multiplicação
    d = divisão`)

let n1 = Number(prompt("Digite um numero: "))
let n2 = Number(prompt("Digite outro numero"))
let r

if (op == 'a'){
    r = n1 + n2
}

else if (op == 's'){
    r = n1 - n2
}

else if (op =='m'){
    r = n1 * n2
}

else if (op == 'd'){
    r = n1 / n2
}

console.log("O resultado da oeração é:" + r) 
