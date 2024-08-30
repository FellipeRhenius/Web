function redirect(destination){
    const routes = {
        htmlPage: "htmlPage.html",
        cssPage: "cssPage.html",
        logicPage: "logicPage.html",
        jsPage: "jsPage.html"
    };
    
    if (routes[destination]){
        window.location.href = routes[destination];
    }
    else{
        console.error('Destino não encontrado!')
    }
}

document.getElementById("btnHtml").addEventListener("click", function(){
    redirect("htmlPage");
});
document.getElementById("btnCss").addEventListener("click", function(){
    redirect("cssPage");
});
document.getElementById("btnLogic").addEventListener("click", function(){
    redirect("logicPage");
});
document.getElementById("btnJs").addEventListener("click", function(){
    redirect("jsPage");
});