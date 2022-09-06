/* 
- Revisão Objetos
 - Representação de algo do mundo físico

 - Propriedades
  - Características do objeto em si
  - Profile/Perfil de Usuário
   nome: 'Usuário Teste'
   apelido: 'teste123'
   biografia: 'Lorem Ipsum',
   contato:
   telefone: '11-1111-111',
   email: 'email@email.com'
*/

// {} --> Objeto Vazio --> Por não possuir propriedades nem metódos
// nome_propriedade:valor_propriedade --> separador pela virgula
// nome_metódo seguido de () e {}

// Objeto
let profile = {
    // Propriedades
    nome: 'Usuário Teste',
    apelido: 'teste 123',
    contatos: [
        {
            telefone: '11-1111-1111',
            email: 'email@email.com'
        }
    ],
    // metodo --> ação dentro do Objeto
     // readAll
    listarContatos() {
        // this --> O objeto Pai de todo mundo no contexto do Objeto
        console.table(this.contatos);
    },
    // Create
    adicionarContato(telefone, email) {
        const novoContato = {
            telefone,
            email
        };

        this.contatos.push(novoContato);
    },
    alterarNome(novoNome) {
        this.nome = novoNome;
    }
    /*
    buscarContato(email) {
        const procurandoContato = {
            email
        };   
    }
*/
};


profile.adicionarContato('996303173', 'email2@email2.com');
profile.adicionarContato('995911442', 'email3@email3.com');
profile.listarContatos();

 // Chamar o metódo dentro do objeto;
// profile.listarContatos();
// profile.adicionarContato()