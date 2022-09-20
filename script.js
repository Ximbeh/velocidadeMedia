const historico = new Array()

//calculadora
function calcular(){
    var deslocamento=document.getElementById("q1").value
    var tempo=document.getElementById("q2").value
    q3 = parseFloat(deslocamento) / parseFloat(tempo) 
    document.getElementById('q3').value=q3  .toFixed(1)
    document.getElementById("historico").innerHTML += q3.toFixed(1)
    console.log(q3.toFixed(1))

}

//historico

    // historicoq3 = `${tempo}/${deslocamento}=${q3}`
    // historicoq3.push(historico)
    // console.log(historico) 



//limpar
function limpar(){
    document.getElementById('q3').value=""
    document.getElementById('q2').value=""
    document.getElementById('q1').value=""
}


