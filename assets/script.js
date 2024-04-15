var carrinhovisivel = false

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)

}else{
    ready();
}
function ready(){
    var botoesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i = 0; i <  botoesEliminarItem.length;i++){
        var button = botoesEliminarItem[i];
        button.addEventListener('click, eliminarItemCarrinho');

    }
}

function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    

    atualizarTotalCarrinho();
}
function atualizarTotalCarrinho (){
    var carrinhoconteiner = document.getElementsByClassName('carrinho')[0];
    var carrinhoItens = carrinhoconteiner.getElementsByClassName
}