function redirect(destination){
    const routes = {
        firstPage: "firstPage.html",
        cssPage: "cssPage.html",
        logicPage: "logicPage.html",
        jsPage: "jsPage.html",
        shopPage: "shopPage.html"
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
document.getElementById("btnCss").addEventListener("click", function(){
    redirect("cssPage");
});
document.getElementById("btnLogic").addEventListener("click", function(){
    redirect("logicPage");
});
document.getElementById("btnJs").addEventListener("click", function(){
    redirect("jsPage");
});
document.getElementById("btnMarket").addEventListener("click", function(){
    redirect("shopPage");
});