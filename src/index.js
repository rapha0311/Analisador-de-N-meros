let txtn = document.getElementById('txtnum')
let txtl = document.getElementById('txtlista')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumber(txtn.value) && !inLista(txtn.value, valores)) {
        valores.push(Number(txtn.value))
        let item = document.createElement('option')
        item.text = `O valor ${txtn.value} foi adicionado`
        txtl.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou contido na lista')

    }

    txtn.value = ''
    txtn.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Não há valores inseridos')
    }else{

        let total = valores.length
        let maxValue = Math.max.apply(null, valores)
        let minValue = Math.min.apply(null, valores)
        let soma = valores.reduce(function(soma, i){
            return soma + i
        })
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Detectamos um total de ${total} número(s)!</p>`
        res.innerHTML += `<p>O maior valor é o número ${maxValue}!</p>`
        res.innerHTML += `<p>O menor valor é o número ${minValue}!</p>`
        res.innerHTML += `<p>O valor da soma destes número é ${soma}!</p>`
        res.innerHTML += `<p>A média destes valores é ${media}!</p>`
    }
}