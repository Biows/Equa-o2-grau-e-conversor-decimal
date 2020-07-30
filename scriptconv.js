function isWrite(n,d){
    if(n.length != 0 && d.length != 0 && d != 0){
        return true
    }else{
        return false
    }
}

function converter(){
    let deno = document.getElementById('deno')
    let nume = document.getElementById('nume')
    let res = document.getElementById('res')  

    if(isWrite(nume.value, deno.value)){
        let divisor = function(n,d){return n / d}
        res.innerHTML = `${divisor(nume.value, deno.value)}`
    }else{
        alert('[Erro] Digite um número corretamente.')
    }
}