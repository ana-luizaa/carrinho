var carrinhovisivel = false

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)

}else{
    ready();
}
function ready(){
    var botoesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(vari=0; i <  botoesEliminarItem.length;i++){
        var button = botoesEliminarItem[i];
        button.addEventListener('click, eliminarItemCarrinho');
        
    }
}
