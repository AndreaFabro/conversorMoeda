var andrea = {
  nome: "Andréa",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 0
}
var luis = {
  nome:"Luís",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 0
}
var imagem = ["https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var jogadores = [ andrea, luis ]

exibeClassificacao(jogadores)

function exibeClassificacao(jogadores){
  var html = ""
  for( i=0; i < jogadores.length; i++){
    jogadores[i].pontos = calculaPontos(jogadores[i])
    
    html += "<tr><td><img src=" + imagem[i] + " class='imagem'" + ">" + jogadores[i].nome+"</td>"
    html += "<td>"+jogadores[i].vitorias+"</td>"
    html += "<td>"+jogadores[i].empates+"</td>"
    html += "<td>"+jogadores[i].derrotas+"</td>"
    html += "<td>"+jogadores[i].pontos+"</td>" 
    
    html += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td></tr>"
  }
  document.getElementById("tabelaJogadores").innerHTML = html
}

function calculaPontos(jogador){
  var pontos = jogador.vitorias * 3 + jogador.empates
  return pontos
}
function adicionarVitoria(i){
  jogadores[i].vitorias++
  exibeClassificacao(jogadores)
}
function adicionarEmpate(i){
  jogadores[i].empates++
  if( i < jogadores.length-1 ){
    jogadores[i+1].empates++
  } else {
    jogadores[i-1].empates++
  }
  exibeClassificacao(jogadores)
}
function adicionarDerrota(i){
  jogadores[i].derrotas++
  exibeClassificacao(jogadores)
}
function adicionarParticipante(){
  var novoNome = prompt("Digite o nome do participante:")
  if( novoNome == ""){
    alert("Nome inválido!")
  } else {
    var nome1 = {
        nome: novoNome,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
    jogadores.push(nome1)
    imagem.push("https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg")
    exibeClassificacao(jogadores)
  }
}