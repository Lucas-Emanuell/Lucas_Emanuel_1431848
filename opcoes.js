var parametros = new URLSearchParams (location.search);
var id= parametros.get("id");
var jogo = jogos.find (function (elem) {return elem.id==id});


if(jogo){
document.getElementById("titulo").innerHTML = jogo.titulo;

document.getElementById("genero").innerHTML = jogo.genero;

document.getElementById("imagem").src = jogo.imagem;

}else{
document.getElementById("titulo").innerHTML = "Não Existe";
document.getElementById("plataforma").innerHTML = "Não Existe";
document.getElementById("genero").innerHTML = "Não Existe";
}
