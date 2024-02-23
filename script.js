function criarDiciplina(){
    location.href = "https://youtube.com";
}

function editarDiciplina(){
    location.href = "https://google.com";
}

function operacaoFinanceira(){
    location.href = "https://terra.com.br";
}

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn-edit");
    var div = document.getElementById("container-edit");

    btn.addEventListener("click", function() {
        if (div.style.display === "none" || div.style.display === "") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {

    var btns = [document.getElementById("btn"),document.getElementById("btn-2"),document.getElementById("btn-3"),
    document.getElementById("btn-4"),document.getElementById("btn-5"),document.getElementById("btn-1")]

    var div = document.getElementById("container");

    for(i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function() {
            if (div.style.display === "none" || div.style.display === "") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });
    }

});

function abrirTurma1() {
    var div = document.getElementById("container-t1");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function abrirTurma2() {
    var div = document.getElementById("container-t2");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function abrirTurma3() {
    var div = document.getElementById("container-t3");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function abrirTurma4() {
    var div = document.getElementById("container-t4");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function abrirAluno1(){
    abrirTurma1()

    var div = document.getElementById("container-a1");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }

}

function abrirAluno2(){
    abrirTurma1()

    var div = document.getElementById("container-a2");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }

}

function abrirAluno3(){
    abrirTurma1()

    var div = document.getElementById("container-a3");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }

}