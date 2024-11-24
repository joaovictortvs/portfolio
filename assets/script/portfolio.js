const menu_burguer = document.getElementById("burguer")
const itens = document.getElementById("itens")

menu_burguer.addEventListener("click",()=>{
    if(itens.style.display =="flex"){
        itens.style.display = "none"
    } else{
        itens.style.display="flex"
    }
})

function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display="block"
    } else{
        itens.style.display="none"
    }
}