
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