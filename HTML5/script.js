function redirect(destination){
    const routes = {
        introducao: 'introducao.html',
        htmlPage: 'htmlPage.html'
    };
    
    if (routes[destination]){
        window.location.href = routes[destination];
    }
    else{
        console.error('Destino não encontrado!')
    }
}

document.getElementById("btnHtml").addEventListener("click", function(){
    redirect('htmlPage');
});
document.getElementById("btnIntroducao").addEventListener("click", function(){
    redirect('introducao');
});
