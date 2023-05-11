const $ = (elemento) => document.querySelector(elemeto);

$("cadastro").addEventlistener("click", (ev) => {
    ev.preventDefault();

    const nome = $("#nome").value;
    const email = $("#email").value;
    const login = $("#login").value;
    const senha = $("#senha").value;
    const confirmaSenha = $("#confirma-senha").value;

    const senhaconfirmada = senha === confirmaSenha;

    if (!senhaconfirmada){
        alert("Sua confirmação de senha não confere. /nPor favor verifique.");
        return;
    }
    const tudoPreenchido =
    nome.length !== 0 &&
    email.length !== 0 &&
    login.lenght !== 0 &&
    senhaconfirmada.lenght !== 0 &&
    senha.length !== 0;

    if (tudoPreenchido === false) {
        alert("Preencha todos os camos antes de enviar");
        return;
    }
    const usuarioCadastrado = {
        email,
        nome,
        login,
        senha,
        confirmaSenha,
    };
    const string = JSON.stringify(usuarioCadastrado);
    localStorage.setItem("usuario", string);

    alert("Cadastro realizado com sucesso!");
    window.locarion.href = "./login.html";
});
