function redirect(destination){
    const routes = {
        firstPage: "firstPage.html",
        htmlPage: "htmlPage.html",
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

document.getElementById("btnFirst").addEventListener("click", function(){
    redirect("firstPage");
});
document.getElementById("btnHtml").addEventListener("click", function(){
    redirect("htmlPage");
});
document.getElementById("btnLogic").addEventListener("click", function(){
    redirect("logicPage");
});
document.getElementById("btnJs").addEventListener("click", function(){
    redirect("jsPage");
});