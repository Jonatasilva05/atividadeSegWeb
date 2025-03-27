document.getElementById("formlogin").addEventListener("submit", function (event) {
    event.preventDefault();
    const RA = document.getElementById("RA").value;
    const senha = document.getElementById("senha").value;
    const errromensagem = document.getElementById("msgerror");
    if (RA === "0220832311013" && senha === "3101132380220") {
        alert("login executado com sucesso !");
        errromensagem.textContent = "login efetuado com sucesso";
        window.location.href = "./dasboard.html"
    } else {
        errromensagem.textContent = "acesso nega, verifique usuario e senha !";
    }       
});

document.getElementById("verSenha").addEventListener("click", function () {

    if (senha.type === "password") {
        senha.type = "text";
        this.textContent = "🙈";
    } else {
        senha.type = "password";
        this.textContent = "🐵";
    }
});

function acctionInvalid() {
    alert("Ação Inválida no momento! \nTente novamente mais tarde!")
}