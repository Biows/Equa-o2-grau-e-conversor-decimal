function isWrite(a,b,c){
    if(a.length != 0 && b.length != 0 && c.length != 0){
        return false
    }else{
        return true
    }
}

function deltaNeg(delta){
    if(delta < 0){
        return false
    }else{
        return true
    }
}

function calcular(){
    let a = document.getElementById('vlra')
    let b = document.getElementById('vlrb')
    let c = document.getElementById('vlrc')
    let res= document.getElementById('res')

    if(isWrite(a.value, b.value, c.value)){
        alert('[Erro] Digite os valores corretamente.')
    }else{
        let delta = function (a,b,c){
            return Math.pow(b,2) - 4 * Number(a) * Number(c)
        }

        let x1 = function (a,b,delta){
            return ((Number(b)*-1) + Math.pow(delta, 0.5)) / (2 * Number(a)) 
        }

        let x2 = function (a,b,delta){
            return ((Number(b)*-1) - Math.pow(delta, 0.5)) / (2 * Number(a)) 
        }
        if(deltaNeg(delta(a.value, b.value, c.value))){
            res.innerHTML = `O valor de delta é ${delta(a.value, b.value, c.value)}<br><br>`
        res.innerHTML += `O valor de x<sub>1</sub> = ${x1(a.value, b.value, delta(a.value, b.value, c.value))}<br><br>`
        res.innerHTML += `O valor de x<sub>2</sub> = ${x2(a.value, b.value, delta(a.value, b.value, c.value))}`
        }else{
            res.innerHTML = `O valor de delta é ${delta(a.value, b.value, c.value)} então...<br><br>`
            res.innerHTML += `O valor de x<sub>1</sub> não pertence aos reais<br><br>`
            res.innerHTML += `O valor de x<sub>2</sub> não pertence aos reais`
        }

        
    }
}