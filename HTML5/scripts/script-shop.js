function operation(type, product) {
    const qtd = document.getElementById('qtd_' + product);
    const value = document.getElementById('value_' + product);
    const total = document.getElementById('total_' + product);

    if (type == 'sub' && qtd.innerHTML == 0) {
        alert('Menor impossivel')
    } else {
        type == 'add' ? qtd.innerHTML++ : qtd.innerHTML--
        const totalValue = (qtd.innerHTML * onlyNumber(value.innerHTML)).toFixed(2)
        total.innerHTML = valueFormater(totalValue)
        sum()
    }
}
function sum() {
    let sum = 0;

    for(let i = 1;i<7;i++){
        let number =onlyNumber(document.getElementById('total_' + i).innerHTML)
        sum += Number(number)
    }

    document.getElementById('subtotal').innerHTML = sum.toFixed(2)
}
function onlyNumber(n){
    return n.replace(/\D/g, '')
}
function valueFormater(n){
    return 'R$ ' + n.toLocaeString('pt-BR')
}