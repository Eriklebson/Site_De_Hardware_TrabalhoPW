function hardware(){
    var seta=document.getElementById("setaHardware");
    var maisText=document.getElementById("maisHardware");
    var hardware=document.getElementById("hardware");

    if(seta.style.display == "none"){
        seta.style.display="inline";
        maisText.style.display="none";
        hardware.innerHTML=">";
    }
    else{
        seta.style.display="none";
        maisText.style.display="inline";
        hardware.innerHTML="<";
    }
}
function monitor(){
    var seta=document.getElementById("setaMonitor");
    var maisText=document.getElementById("maisMonitor");
    var monitor=document.getElementById("monitor");

    if(seta.style.display == "none"){
        seta.style.display="inline";
        maisText.style.display="none";
        monitor.innerHTML=">";
    }
    else{
        seta.style.display="none";
        maisText.style.display="inline";
        monitor.innerHTML="<";
    }
}
function cadastro(){
    window.open('../suporte/cadastro.html', 'cadastro', 'height=700px, width=7000px')
}
function entrar(){
    window.open('../suporte/login.html', 'login', 'height=700px, width=7000px')
}
function suporte(){
    window.open('../suporte/suporte.html', 'login', 'height=700px, width=7000px')
}
function cadastro1(){
    window.open('../../suporte/cadastro.html', 'cadastro', 'height=700px, width=7000px')
}
function entrar1(){
    window.open('../../suporte/login.html', 'login', 'height=700px, width=7000px')
}
function suporte1(){
    window.open('../../suporte/suporte.html', 'login', 'height=700px, width=7000px')
}
function enviar(){
    alert("Enviando")
}
function popup(){
    alert("Verificando credenciais")
}
