function redirect(destination){
    const routes = {
        firstPage: "firstPage.html",
        htmlPage: "htmlPage.html",
        cssPage: "cssPage.html",
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
document.getElementById("btnCss").addEventListener("click", function(){
    redirect("cssPage");
});
document.getElementById("btnJs").addEventListener("click", function(){
    redirect("jsPage");
});