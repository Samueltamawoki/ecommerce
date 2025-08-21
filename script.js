//conectar com a APi utilizando o FETCH



function aperta1(){
fetch('produtos.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)



    //front end
    document.getElementById('imagem').innerHTML = corpo.img
    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('descricao').innerHTML = corpo.descricao
    document.getElementById('preco').innerHTML = corpo.preco

    })}

function aperta2(){
fetch('produtos.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)
        
        
        
    //front end
    document.getElementById('imagem').innerHTML = corpo.img2
    document.getElementById('nome').innerHTML = corpo.nome2
    document.getElementById('descricao').innerHTML = corpo.descricao2
    document.getElementById('preco').innerHTML = corpo.preco2
    })}

function aperta3(){
fetch('produtos.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)
                
                
                
    //front end
    document.getElementById('imagem').innerHTML = corpo.img3
    document.getElementById('nome').innerHTML = corpo.nome3
    document.getElementById('descricao').innerHTML = corpo.descricao3
    document.getElementById('preco').innerHTML = corpo.preco3
    })}

function compra(){
    let nomeCell = document.getElementById('nome').innerHTML;
    Swal.fire({
        title: 'Compra realizada!',
        text: `Você comprou ${nomeCell}`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
    console.log(corpo)
}



