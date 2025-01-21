document.querySelector('#calcular').addEventListener('click', ()=> {
    let n1 = parseFloat(document.querySelector('#n1').value);
    let n2 = parseFloat(document.querySelector('#n2').value);
    if(n1 >=0 && n2 >= 0) {
        let resultado = n1 + n2;
        document.querySelector('.resultado').innerHTML = resultado;
    }
});