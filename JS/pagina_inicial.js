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
