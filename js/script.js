//const nomes = ['Ana', 'Carla', 'Trísia'];

let listaUsuarios = [];

fetch('usuarios.json')
    .then(response => response.json())
    .then(data => { listaUsuarios = data; 
                    console.log(listaUsuarios);
                    
                    for (let usuario of listaUsuarios) {
                        inserirNomeNaLista(usuario);
                        console.log(usuario.nome);
                    }
                })
    .catch(error => console.error("Não foi lek",error));

const listaNomesElement = document.createElement('ul');
document.body.appendChild(listaNomesElement);


function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    let usuario = {nome: inputNomeElement.value, idade: inputIdadeElement.value, cpf: inputCpfElement.value};

    inserirNomeNaLista(usuario);
    inputNomeElement.value = ''; 
    inputIdadeElement.value = '';
    inputCpfElement.value = '';
}

function inserirNomeNaLista(usuario) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = usuario.nome +'___' + usuario.idade + ' anos___'+ usuario.cpf + ' ';

    spanElement.addEventListener('click', event => {
        const inputElement = document.createElement('input');
        inputElement.value = usuario.nome;
        liElement.appendChild(inputElement);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaNomesElement.appendChild(liElement);
}



