
alert("Bem-vindo(a) ao meu portifólio!");

function apresentacao() {
    alert("Olá! Meu nome é Andrew e sou estudante de Desenvolvimento Web");
}

function alterarTitulo() {
    document.getElementById("titulo-principal").innerHTML = "Portifólio Profissional - " + prompt("Digite seu nome:");
}

function destacarSobre() {
    document.getElementById("sobre").style.backgroundColor = "#FFF3CD";
    document.getElementById("sobre").style.border = "2px solid #FFC107";
    document.getElementById("sobre").style.borderRadius = "10px";
}

let clique = 0;

function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").innerHTML = clique;
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nomeContato").value;
    let email = document.getElementById("emailContato").value;
    let mensagem = document.getElementById("mensagemContato").value;
    let feedback = document.getElementById("feedback");

    feedback.textContent = "";

    if (nome.length < 3) {
        feedback.textContent = "❌ Nome deve ter pelo menos 3 caracteres.";
        feedback.className = "erro"
        return;
    }

    if (email.indexOf("@") === -1) {
        feedback.textContent = "❌ E-mail inválido. Digite um e-mail válido.";
        feedback.className = "erro"
        return;
    }

    if (mensagem.length < 10) {
        feedback.textContent = "❌ Mensagem deve ter pelo menos 10 caracteres.";
        feedback.className = "erro"
        return;
    }

    feedback.textContent = "✅ Mensagem enviada com sucesso!";
    feedback.className = "sucesso"

    this.reset();
});

document.getElementById("nomeContato").addEventListener("input", function() {
    let valor = this.value;
    if (valor.length < 3) {
        document.getElementById("feedback").textContent = "Digite pelo menos 3 caracteres.";
        document.getElementById("feedback").className = "erro";
    } else {
        document.getElementById("feedback").textContent = "✅ Nome válido!";
        document.getElementById("feedback").className = "sucesso";
    }
});

