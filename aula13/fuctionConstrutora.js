function contas(titular, numeroConta, tipoConta, saldo) {
    return {
        titular,
        numeroConta,
        tipoConta,
        saldo
    }
};

// Função Construtora de novas contas
function NovasContas(titular, numeroConta, tipoConta, saldo) {
    this.titular = titular
    this.numeroConta = numeroConta
    this.tipoConta = tipoConta
    this.saldo = saldo
    this.usuarios = [];
    this.novoUsuario = function (nome, nrConta, tpConta, saldo) {
        const novoUsuario = {
            nome,
            nrConta,
            tpConta,
            saldo
        }
        this.usuarios.push(novoUsuario)
    }
}

const contaUsuarios = new NovasContas
contaUsuarios.novoUsuario('Abigael Natte', 5486273622, 'Conta Corrente', 'R$ ' + 27.771);
contaUsuarios.novoUsuario('Ramon Connell', 1183971869, 'Conta Poupança', 'R$ ' + 8675);
contaUsuarios.novoUsuario('Jarret Lafuente', 9582019689, 'Conta Poupança', 'R$ ' + 27363);
contaUsuarios.novoUsuario('Ansel Ardley', 1761924656, 'Conta Poupança', 'R$ ' + 32415);
contaUsuarios.novoUsuario('Jacki Shurmer', 7401971607, 'Conta Poupança', 'R$ ' + 18789);
contaUsuarios.novoUsuario('Jobi Mawtus', 630841470, 'Conta Corrente', 'R$ ' + 28776);
contaUsuarios.novoUsuario('Thomasin Latour', 4223508636, 'Conta Corrente', 'R$ ' + 2177);
contaUsuarios.novoUsuario('Lonnie Verheijden', 185979521, 'Conta Poupança', 'R$ ' + 25994);
contaUsuarios.novoUsuario('Alonso Wannan', 3151956165, 'Conta Corrente', 'R$ ' + 7601);
contaUsuarios.novoUsuario('Bendite Huggett', 2138105881, 'Conta Poupança', 'R$ ' + 33196);
console.table(contaUsuarios.usuarios);

