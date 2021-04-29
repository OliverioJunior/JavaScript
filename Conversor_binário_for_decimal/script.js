

function converter(){
    var decimal = document.querySelector('#decimal').value;
    if(decimal==='') alert( 'Digite um número decimal');
    decimal.split('').map((char) =>{
        if(char !== '0' && char !== '1') return alert('Digite apenas 0 ou 1');
    })
    const bir = parseInt(decimal, 2);
    document.getElementById('binario').value = bir;
    return true; 

}

